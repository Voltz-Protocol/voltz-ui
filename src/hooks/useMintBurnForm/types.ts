import { ReactNode } from "react";
import { useTokenApproval } from "@hooks";
import { MintBurnFormActions } from "@components/*";
import { BigNumber } from "ethers";

export enum MintBurnFormLiquidityAction {
  ADD='add',
  BURN='burn'
};

export enum MintBurnFormMarginAction {
  ADD='add',
  REMOVE='remove'
};

export type MintBurnFormFlags = {
  isAddingLiquidity: boolean;
  isAddingMargin: boolean;
  isRemovingMargin: boolean;
  isRemovingLiquidity: boolean;
  isValid: boolean;
}

export type MintBurnFormState = {
  fixedLow?: number;
  fixedHigh?: number;
  liquidityAction: MintBurnFormLiquidityAction;
  margin?: number;
  marginAction: MintBurnFormMarginAction;
  notional?: number;
};

export type MintBurnForm = {
  action: MintBurnFormActions,
  approvalsNeeded: boolean;
  balance?: BigNumber; 
  errors: Record<string, string>,
  flags: MintBurnFormFlags,
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
  submitButtonHint: ReactNode;
  submitButtonText: ReactNode;
  tokenApprovals: ReturnType<typeof useTokenApproval>;
  validate: () => Promise<boolean>;
};