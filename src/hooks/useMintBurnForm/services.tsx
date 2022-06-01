import { useTokenApproval } from "@hooks";

/**
 * Returns true or false if approvals are needed for this user to trade
 * @param tokenApprovals - the token approvals state for this form
 * @param isRemovingLiquidity - boolean flag for if the action is to remove (burn) liquidity
 * @param isRemovingMargin - boolean flag for if the action is to remove margin
 */
export const approvalsNeeded = (tokenApprovals: ReturnType<typeof useTokenApproval>, isRemovingLiquidity: boolean, isRemovingMargin: boolean) => {
  if(!isRemovingLiquidity && !isRemovingMargin) {
    return !tokenApprovals.underlyingTokenApprovedForPeriphery;
  }
  return false;
}
  