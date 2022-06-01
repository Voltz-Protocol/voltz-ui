import { useEffect, useRef, useState } from "react";
import { isUndefined } from "lodash";
import { MintBurnFormModes } from "@components/interface";
import { useAMMContext, useBalance, useTokenApproval } from "@hooks";
import { AugmentedAMM, lessThan } from "@utilities";
import * as s from './services';
import { MintBurnForm, MintBurnFormState, MintBurnFormLiquidityAction, MintBurnFormMarginAction } from "./types";

export const useMintBurnForm = (
  amm: AugmentedAMM, 
  mode: MintBurnFormModes,
  defaultValues: Partial<MintBurnFormState> = {}
): MintBurnForm => {
  const defaultFixedHigh = !isUndefined(defaultValues.fixedHigh) ? defaultValues.fixedHigh : undefined;
  const defaultFixedLow = !isUndefined(defaultValues.fixedLow) ? defaultValues.fixedLow : undefined;
  const defaultLiquidityAction = defaultValues.liquidityAction || MintBurnFormLiquidityAction.ADD;
  const defaultMargin = !isUndefined(defaultValues.margin) ? defaultValues.margin : 0;
  const defaultMarginAction = defaultValues.marginAction || MintBurnFormMarginAction.ADD;
  const defaultNotional = !isUndefined(defaultValues.notional) ? defaultValues.notional : 0;

  const [fixedHigh, setFixedHigh] = useState<MintBurnFormState['fixedHigh']>(defaultFixedHigh);
  const [fixedLow, setFixedLow] = useState<MintBurnFormState['fixedLow']>(defaultFixedLow);
  const [liquidityAction, setLiquidityAction] = useState<MintBurnFormLiquidityAction>(defaultLiquidityAction);
  const [margin, setMargin] = useState<MintBurnFormState['margin']>(defaultMargin);
  const [marginAction, setMarginAction] = useState<MintBurnFormMarginAction>(defaultMarginAction);
  const [notional, setNotional] = useState<MintBurnFormState['notional']>(defaultNotional);

  const [errors, setErrors] = useState<MintBurnForm['errors']>({});
  const [isValid, setIsValid] = useState<boolean>(false);
  const touched = useRef<string[]>([]);

  const action = s.getFormAction(mode, liquidityAction);
  const balance = useBalance(amm);
  const { mintMinimumMarginRequirement } = useAMMContext();
  const tokenApprovals = useTokenApproval(amm, true);

  const flags = {
    isAddingLiquidity: mode !== MintBurnFormModes.EDIT_LIQUIDITY || liquidityAction === MintBurnFormLiquidityAction.ADD,
    isAddingMargin: mode === MintBurnFormModes.EDIT_MARGIN && marginAction === MintBurnFormMarginAction.ADD,
    isRemovingLiquidity: mode === MintBurnFormModes.EDIT_LIQUIDITY && liquidityAction === MintBurnFormLiquidityAction.BURN,
    isRemovingMargin: mode === MintBurnFormModes.EDIT_MARGIN && marginAction === MintBurnFormMarginAction.REMOVE,
    isValid
  };

  const approvalsNeeded = s.approvalsNeeded(flags, tokenApprovals);
  const minRequiredMargin = mintMinimumMarginRequirement.result ?? undefined;
  const submitButtonHint = s.getSubmitButtonHint(amm, errors, flags, tokenApprovals);
  const submitButtonText = s.getSubmitButtonText(amm, mode, flags, tokenApprovals);
  
  // Load the minimum required margin
  useEffect(() => {
    if (
      !isUndefined(notional) && notional !== 0 &&
      !isUndefined(fixedLow) && fixedLow !== 0 &&
      !isUndefined(fixedHigh) && fixedHigh !== 0
    ) {
      mintMinimumMarginRequirement.call({ 
        fixedLow: fixedLow, 
        fixedHigh: fixedHigh, 
        notional: notional 
      });
    }
  }, [mintMinimumMarginRequirement.call, notional, fixedLow, fixedHigh, approvalsNeeded]);

  // validate the form after values change
  useEffect(() => {
    if(touched.current.length) {
      validate();
    }
  }, [fixedHigh, fixedLow, liquidityAction, margin, marginAction, notional, minRequiredMargin]);

  const addError = (err: Record<string, string>, name: string, message: string) => {
    if(touched.current.includes(name)) {
      err[name] = message;
    }
  };

  const updateFixedHigh = (value: MintBurnFormState['fixedHigh']) => {
    if(!touched.current.includes('fixedHigh')) {
      touched.current.push('fixedHigh');
    }
    const newValue = !isUndefined(value) ? amm.getNextUsableFixedRate(value, 0) : undefined;
    setFixedHigh(newValue);
  }

  const updateFixedLow = (value: MintBurnFormState['fixedLow']) => {
    if(!touched.current.includes('fixedLow')) {
      touched.current.push('fixedLow');
    }
    const newValue = !isUndefined(value) ? amm.getNextUsableFixedRate(value, 0) : undefined;
    setFixedLow(newValue);
  }

  const updateLiquidityAction = (value: MintBurnFormState['liquidityAction']) => {
    if(!touched.current.includes('liquidityAction')) {
      touched.current.push('liquidityAction');
    }
    setLiquidityAction(value);
  }

  const updateMargin = (value: MintBurnFormState['margin']) => {
    if(!touched.current.includes('margin')) {
      touched.current.push('margin');
    }
    setMargin(value);
  }

  const updateMarginAction = (value: MintBurnFormState['marginAction']) => {
    if(!touched.current.includes('marginAction')) {
      touched.current.push('marginAction');
    }
    setMarginAction(value);
  }

  const updateNotional = (value: MintBurnFormState['notional']) => {
    if(!touched.current.includes('notional')) {
      touched.current.push('notional');
    }
    setNotional(value);
  }

  const validate = async () => {
    if(mode === MintBurnFormModes.NEW_POSITION) {
      return await validateNewPosition();
    } else if(mode === MintBurnFormModes.EDIT_MARGIN) {
      return await validateEditMargin();
    } else {
      return await validateEditLiquidity();
    }
  }

  const validateNewPosition = async () => {
    const err: Record<string, string> = {};
    let valid = true;

    if(isUndefined(fixedLow)) {
      valid = false;
      addError(err, 'fixedLow', 'Please enter a value');
    }

    if(isUndefined(fixedHigh)) {
      valid = false;
      addError(err, 'fixedHigh', 'Please enter a value');
    }
      
    if(lessThan(fixedHigh, fixedLow) === true) {
      valid = false;
      if(touched.current.includes('fixedHigh') || touched.current.includes('fixedLow')) {
        err['fixedLow'] = 'Lower Rate must be smaller than Upper Rate';
      }
    }

    if(isUndefined(notional) || notional === 0) {
      valid = false;
      addError(err, 'notional', 'Please enter an amount');
    } 

    if(isUndefined(margin) || margin === 0) {
      valid = false;
      addError(err, 'margin', 'Please enter an amount');
    }    

    if(!isUndefined(margin) && margin !== 0) {
      try {
        const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
        if(!hasEnoughFunds) {
          valid = false;
          addError(err, 'margin', 'Insufficient funds');
        }
      } catch(e) {
        // If error, just skip this check
      }
    }

    // Check that the input margin is >= minimum required margin
    if(margin !== 0 && lessThan(margin, minRequiredMargin) === true) {
      valid = false;
      addError(err, 'margin', 'Not enough margin');
    }
    
    setErrors(err);
    setIsValid(valid);
    return valid;
  };

  const validateEditMargin = async () => {
    const err: Record<string, string> = {};
    let valid = true;

    if(isUndefined(margin) || margin === 0) {
      valid = false;
      addError(err, 'margin', 'Please enter an amount');
    }

    if(marginAction === MintBurnFormMarginAction.ADD) {
      // check user has sufficient funds
      if(!isUndefined(margin) && margin !== 0) {
        try {
          const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
          if(!hasEnoughFunds) {
            valid = false;
            addError(err, 'margin', 'Insufficient funds');
          }
        } catch(e) {
          // If error, just skip this check
        }
      }
    }
    
    setErrors(err);
    setIsValid(valid);
    return valid;
  };

  const validateEditLiquidity = async () => {
    const err: Record<string, string> = {};
    let valid = true;

    if(isUndefined(notional) || notional === 0) {
      valid = false;
      addError(err, 'notional', 'Please enter an amount');
    } 

    if(isUndefined(margin)) {
      valid = false;
      addError(err, 'margin', 'Please enter an amount');
    }

    if(liquidityAction === MintBurnFormLiquidityAction.ADD) {
      // check user has sufficient funds
      if(!isUndefined(margin) && margin !== 0) {
        try {
          const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
          if(!hasEnoughFunds) {
            valid = false;
            addError(err, 'margin', 'Insufficient funds');
          }
        } catch(e) {
          // If error, just skip this check
        }
      }
    }

    setErrors(err);
    setIsValid(valid);
    return valid;
  };

  return {
    action,
    approvalsNeeded,
    balance,
    errors,
    flags,
    minRequiredMargin: {
      loading: mintMinimumMarginRequirement.loading,
      value: mintMinimumMarginRequirement.result ?? undefined,
    },
    setFixedHigh: updateFixedHigh,
    setFixedLow: updateFixedLow,
    setLiquidityAction: updateLiquidityAction,
    setMargin: updateMargin,
    setMarginAction: updateMarginAction,
    setNotional: updateNotional,
    state: {
      fixedHigh,
      fixedLow,
      liquidityAction,
      margin,
      marginAction,
      notional
    },
    submitButtonHint,
    submitButtonText,
    tokenApprovals,
    validate
  }
}

export default useMintBurnForm;