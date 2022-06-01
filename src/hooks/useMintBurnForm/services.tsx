import { ReactNode } from "react";
import { MintBurnFormModes, MintBurnFormActions } from "@components/interface";
import { useTokenApproval } from "@hooks";
import { colors } from "@theme";
import { Box } from "@mui/system";
import { AugmentedAMM } from "@utilities";
import { MintBurnFormFlags, MintBurnFormLiquidityAction } from "./types";

type TextProps = {
  bold?: boolean;
  children?: ReactNode;
  green?: boolean;
  red?: boolean;
};
export const Text = ({ bold, children, green, red }: TextProps) => (
  <Box component='span' sx={{ 
    color: green ? colors.vzCustomGreen1 : red ? colors.vzCustomRed1 : undefined,
    fontWeight: bold ? 'bold' : undefined,
    textTransform: 'none'
  }}>
    {children}
  </Box>
);

/**
 * Returns true or false if approvals are needed for this user to trade
 * @param flags - the form flags (isRemovingMargin etc)
 * @param tokenApprovals - the token approvals state for this form
 */
export const approvalsNeeded = (flags: MintBurnFormFlags, tokenApprovals: ReturnType<typeof useTokenApproval>) => {
  if(!flags.isRemovingLiquidity && !flags.isRemovingMargin) {
    return !tokenApprovals.underlyingTokenApprovedForPeriphery;
  }
  return false;
}

/**
 * Returns what action the form is currently set to make (SWAP, FCM_SWAP etc)
 * @param mode - the mode the form is in
 * @param liquidityAction - the liquidity action selected on the form 
 */
 export const getFormAction = (mode: MintBurnFormModes, liquidityAction: MintBurnFormLiquidityAction) => {
  if (mode === MintBurnFormModes.EDIT_MARGIN) {
    return MintBurnFormActions.UPDATE;
  } 
  else if (mode !== MintBurnFormModes.EDIT_LIQUIDITY || liquidityAction === MintBurnFormLiquidityAction.ADD) {
    return MintBurnFormActions.MINT;
  } 
  else {
    return MintBurnFormActions.BURN;
  }
};

/**
 * Gets the hint text to show below the submit button
 * @param amm - the amm class instance for this form
 * @param errors - the form errors object
 * @param flags - the form flags (isRemovingMargin etc)
 * @param tokenApprovals - the token approvals state for this form
 */
export const getSubmitButtonHint = (
  amm: AugmentedAMM, 
  errors: Record<string,string>,
  flags: MintBurnFormFlags,
  tokenApprovals: ReturnType<typeof useTokenApproval>
) => {
  // Please note that the order these are in is important, you need the conditions that take precidence
  // to be nearer the top.

  // Token approvals - Something happening
  if(tokenApprovals.checkingApprovals) {
    return 'Initialising, please wait...';
  }
  if(tokenApprovals.approving) {
    return 'Waiting for confirmation...';
  }

  if(!flags.isRemovingLiquidity && !flags.isRemovingMargin) {
    if(tokenApprovals.lastError) {
      return <Text red>{tokenApprovals.lastError.message}</Text>
    }
    
    // Token approvals - user needs to approve a token
    if(flags.isValid) {
      if(!tokenApprovals.underlyingTokenApprovedForPeriphery) {
        return `Please approve ${amm.underlyingToken.name || ''}`;
      }
    }
  }

  // Form validation
  if (!flags.isValid) {
    if(errors.balance) {
      return `You do not have enough ${amm.underlyingToken.name || ''}`;
    }
    if(!Object.keys(errors).length) {
      return 'Input your parameters';
    }
    return 'Please fix form errors to continue';
  }

  if (flags.isValid) {
    return <>{tokenApprovals.lastApproval && <><Text green>Tokens approved</Text>. </>}Let's trade!</>;
  }
}

/**
 * Gets the text to show on the submit button
 * @param amm - the amm class instance for this form
 * @param mode - the mode the form is in
 * @param flags - the form flags (isRemovingMargin etc)
 * @param tokenApprovals - the token approvals state for this form
 */
 export const getSubmitButtonText = (
  amm: AugmentedAMM, 
  mode: MintBurnFormModes,
  flags: MintBurnFormFlags,
  tokenApprovals: ReturnType<typeof useTokenApproval>, 
) => {
  if (tokenApprovals.checkingApprovals) {
    return 'Initialising...';
  }
  if (tokenApprovals.approving) {
    return 'Approving...';
  }

  if(!flags.isRemovingMargin && !flags.isRemovingLiquidity) {
    if (!tokenApprovals.underlyingTokenApprovedForPeriphery) {
      return <Box>Approve <Text>{amm.underlyingToken.name || ''}</Text></Box>;
    }
  }

  if(mode === MintBurnFormModes.EDIT_MARGIN) {
    return flags.isAddingMargin ? 'Deposit Margin' : 'Withdraw Margin';
  }

  return flags.isAddingLiquidity ? 'Provide Liquidity' : 'Burn Liquidity';
};