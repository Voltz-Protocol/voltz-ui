import { AugmentedAMM } from "@utilities";
import { isUndefined } from "lodash";
import { useEffect, useRef, useState } from "react";
import { MintBurnFormModes } from "@components/interface";
import { useAMMContext, useTokenApproval } from "@hooks";
import * as s from './services';

export enum MintBurnFormLiquidityAction {
  ADD='add',
  BURN='burn'
};

export enum MintBurnFormMarginAction {
  ADD='add',
  REMOVE='remove'
};

export type MintBurnFormState = {
  fixedLow?: number;
  fixedHigh?: number;
  liquidityAction: MintBurnFormLiquidityAction;
  margin?: number;
  marginAction: MintBurnFormMarginAction;
  notional?: number;
};

export type MintBurnForm = {
  approvalsNeeded: boolean;
  errors: Record<string, string>,
  isAddingLiquidity: boolean;
  isAddingMargin: boolean;
  isRemovingMargin: boolean;
  isRemovingLiquidity: boolean;
  isValid: boolean;
  minRequiredMargin: {
    loading: boolean;
    value?: number;
  };
  setFixedHigh: (value: MintBurnFormState['fixedHigh']) => void;
  setFixedLow: (value: MintBurnFormState['fixedLow']) => void;
  setLiquidityAction: (value: MintBurnFormState['liquidityAction']) => void;
  setMargin: (value: MintBurnFormState['margin']) => void;
  setMarginAction: (value: MintBurnFormState['marginAction']) => void;
  setNotional: (value: MintBurnFormState['notional']) => void;
  state: MintBurnFormState,
  tokenApprovals: ReturnType<typeof useTokenApproval>;
  validate: () => Promise<boolean>;
};

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

  const { mintMinimumMarginRequirement } = useAMMContext();
  const tokenApprovals = useTokenApproval(amm, true);
  
  const isAddingLiquidity = mode !== MintBurnFormModes.EDIT_LIQUIDITY || liquidityAction === MintBurnFormLiquidityAction.ADD;
  const isAddingMargin = mode === MintBurnFormModes.EDIT_MARGIN && marginAction === MintBurnFormMarginAction.ADD;
  const isRemovingLiquidity = mode === MintBurnFormModes.EDIT_LIQUIDITY && liquidityAction === MintBurnFormLiquidityAction.BURN;
  const isRemovingMargin = mode === MintBurnFormModes.EDIT_MARGIN && marginAction === MintBurnFormMarginAction.REMOVE;

  const approvalsNeeded = s.approvalsNeeded(tokenApprovals, isRemovingLiquidity, isRemovingMargin);
  const minRequiredMargin = mintMinimumMarginRequirement.result ?? undefined;
  
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

  const updateFixedHigh = (value: MintBurnFormState['fixedHigh']) => {
    if(!touched.current.includes('fixedHigh')) {
      touched.current.push('fixedHigh');
    } 
    setFixedHigh(value);
  }

  const updateFixedLow = (value: MintBurnFormState['fixedLow']) => {
    if(!touched.current.includes('fixedLow')) {
      touched.current.push('fixedLow');
    }
    setFixedLow(value);
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
      if(touched.current.includes('fixedLow')) {
        err['fixedLow'] = 'Please enter a value';
      }
    }

    if(isUndefined(fixedHigh)) {
      valid = false;
      if(touched.current.includes('fixedHigh')) {
        err['fixedHigh'] = 'Please enter a value';
      }
    }
      
    if(!isUndefined(fixedLow) && !isUndefined(fixedHigh) && fixedLow >= fixedHigh) {
      valid = false;
      if(touched.current.includes('fixedHigh') || touched.current.includes('fixedLow')) {
        err['fixedLow'] = 'Lower Rate must be smaller than Upper Rate';
      }
    }

    if(isUndefined(notional) || notional === 0) {
      valid = false;
      if(touched.current.includes('notional')) {
        err['notional'] = 'Please enter an amount';
      }
    } 

    if(isUndefined(margin) || margin === 0) {
      valid = false;
      if(touched.current.includes('margin')) {
        err['margin'] = 'Please enter an amount';
      }
    }    

    if(!isUndefined(margin) && margin !== 0) {
      try {
        const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
        if(!hasEnoughFunds) {
          valid = false;
          if(touched.current.includes('margin')) {
            err['margin'] = 'Insufficient funds';
          }
        }
      } catch(e) {
        // If error, just skip this check
      }
    }

    // Check that the input margin is >= minimum required margin
    if(!isUndefined(minRequiredMargin) && !isUndefined(margin) && margin !== 0 && margin < minRequiredMargin) {
      valid = false;
      if(touched.current.includes('margin')) {
        err['margin'] = 'Not enough margin';
      }
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
      if(touched.current.includes('margin')) {
        err['margin'] = 'Please enter an amount';
      }
    }

    if(marginAction === MintBurnFormMarginAction.ADD) {
      // check user has sufficient funds
      if(!isUndefined(margin) && margin !== 0) {
        try {
          const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
          if(!hasEnoughFunds) {
            valid = false;
            if(touched.current.includes('margin')) {
              err['margin'] = 'Insufficient funds';
            }
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
      if(touched.current.includes('notional')) {
        err['notional'] = 'Please enter an amount';
      }
    } 

    if(isUndefined(margin)) {
      valid = false;
      if(touched.current.includes('margin')) {
        err['margin'] = 'Please enter an amount';
      }
    }

    if(liquidityAction === MintBurnFormLiquidityAction.ADD) {
      // check user has sufficient funds
      if(!isUndefined(margin) && margin !== 0) {
        try {
          const hasEnoughFunds = await amm.hasEnoughUnderlyingTokens(margin);
          if(!hasEnoughFunds) {
            valid = false;
            if(touched.current.includes('margin')) {
              err['margin'] = 'Insufficient funds';
            }
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
    approvalsNeeded,
    errors,
    isAddingLiquidity,
    isAddingMargin,
    isRemovingLiquidity,
    isRemovingMargin,
    isValid,
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
    tokenApprovals,
    validate
  }
}

export default useMintBurnForm;