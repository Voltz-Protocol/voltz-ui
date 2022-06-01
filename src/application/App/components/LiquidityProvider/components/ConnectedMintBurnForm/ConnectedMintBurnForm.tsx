import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Position } from '@voltz-protocol/v1-sdk/dist/types/entities';

import { AugmentedAMM } from '@utilities';
import { routes } from '@routes';
import { actions, selectors } from '@store';
import { MintBurnFormLiquidityAction, MintBurnFormMarginAction, useAgent, useDispatch, useMintBurnForm, useSelector } from '@hooks';
import { MintBurnForm, MintBurnFormActions, MintBurnFormModes, PendingTransaction } from '@components/interface';
import { updateFixedRate } from './utilities';
import { BigNumber } from 'ethers';

export type ConnectedMintBurnFormProps = {
  amm: AugmentedAMM;
  mode?: MintBurnFormModes;
  onReset: () => void;
  position?: Position;
};

const ConnectedMintBurnForm: React.FunctionComponent<ConnectedMintBurnFormProps> = ({
  amm,
  onReset,
  mode = MintBurnFormModes.NEW_POSITION,
  position
}) => {
  const { agent } = useAgent();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    fixedLow: position ? parseFloat(position.fixedRateLower.toFixed() ) : undefined,
    fixedHigh: position ? parseFloat(position.fixedRateUpper.toFixed() ) : undefined
  }
  const form = useMintBurnForm(amm, mode, defaultValues);

  const [transactionId, setTransactionId] = useState<string | undefined>();
  const activeTransaction = useSelector(selectors.transactionSelector)(transactionId);

  const getSubmitAction = () => {
    const isBurningLiquidity = (mode === MintBurnFormModes.EDIT_LIQUIDITY && form.state.liquidityAction === MintBurnFormLiquidityAction.BURN);
    const isRemovingMargin = (mode === MintBurnFormModes.EDIT_MARGIN && form.state.marginAction === MintBurnFormMarginAction.REMOVE);
    
    const transaction = { 
      ammId: amm.id, 
      agent,
      fixedLow: form.state.fixedLow,
      fixedHigh: form.state.fixedHigh,
      margin: Math.abs(form.state.margin as number) * (isRemovingMargin ? -1 : 1),
      notional: Math.abs(form.state.notional as number) * (isBurningLiquidity ? -1 : 1),
    };
  
    switch(form.action) {
      case MintBurnFormActions.UPDATE:
        return actions.updatePositionMarginAction(amm, transaction);
      case MintBurnFormActions.MINT:
        return actions.mintAction(amm, transaction);
      case MintBurnFormActions.BURN:
        return actions.burnAction(amm, transaction);
    }
  }

  const handleComplete = () => {
    onReset();
    navigate(`/${routes.LP_FARM}`);
  };

  const handleGoBack = () => {
    const action = actions.closeTransaction(transactionId as string);
    dispatch(action);
  }

  const handleSetFixedHigh = useCallback(
    updateFixedRate({ amm, fixedRate: form.state.fixedHigh, setFixedRate: form.setFixedHigh }),
    [amm, form.state.fixedHigh, form.setFixedHigh],
  );

  const handleSetFixedLow = useCallback(
    updateFixedRate({ amm, fixedRate: form.state.fixedLow, setFixedRate: form.setFixedLow }),
    [amm, form.state.fixedLow, form.setFixedLow],
  );

  const handleSubmit = () => {
    if(!form.flags.isValid) return;

    if(form.approvalsNeeded) {
      if(!form.tokenApprovals.underlyingTokenApprovedForPeriphery) {
        form.tokenApprovals.approveUnderlyingTokenForPeriphery();
        return;
      }
    }

    const action = getSubmitAction();
    setTransactionId(action.payload.transaction.id);
    dispatch(action);
  };

  if (!amm) {
    return null;
  }

  if (activeTransaction) {
    return (
      <PendingTransaction 
        amm={amm} 
        isEditingMargin={mode === MintBurnFormModes.EDIT_MARGIN} 
        liquidityAction={form.state.liquidityAction} 
        transactionId={transactionId} 
        onComplete={handleComplete}
        notional={form.state.notional}
        margin={Math.abs(form.state.margin as number) * (form.flags.isRemovingMargin ? -1 : 1) }
        onBack={handleGoBack} 
      />
    );
  }

  return (
    <MintBurnForm
      balance={form.balance ? amm.descale(form.balance) : undefined}
      endDate={amm.endDateTime}
      formState={form.state}
      errors={form.errors}
      mode={mode}
      isFormValid={form.flags.isValid}
      minRequiredMargin={form.minRequiredMargin.value}
      minRequiredMarginLoading={form.minRequiredMargin.loading}
      onCancel={onReset}
      onChangeFixedLow={handleSetFixedLow}
      onChangeFixedHigh={handleSetFixedHigh}
      onChangeLiquidityAction={form.setLiquidityAction}
      onChangeMargin={form.setMargin}
      onChangeMarginAction={form.setMarginAction} 
      onChangeNotional={form.setNotional}
      onSubmit={handleSubmit}
      positionMargin={position?.margin ? amm.descale(BigNumber.from(position.margin.toString())) : undefined}
      protocol={amm.protocol}
      startDate={amm.startDateTime}
      submitButtonHint={form.submitButtonHint}
      submitButtonText={form.submitButtonText}
      tokenApprovals={form.tokenApprovals}
      underlyingTokenName={amm.underlyingToken.name}
    />
  );
};

export default ConnectedMintBurnForm;
