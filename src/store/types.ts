import { Agents } from '@components/contexts';

export type WindowWithEthereum = typeof window & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ethereum: any;
};


// things that can occur after the transaction has been mined or fails
export type TransactionUpdate = {
  id: string;
  txid?: string;
  failedAt?: string;
  failureMessage?: string;
  succeededAt?: string;
  // refers to when the transaction has been loaded from the subgraoh, it will mark it as resolved, means there is a corresponding position that matches that (not strictly speaking true)
  // if value != reject
  resolvedAt?: string;
};


// defines a mint or a swap
export type Transaction = TransactionUpdate & {
  agent: Agents;
  ammId: string;
  fixedLow?: number;
  fixedHigh?: number;
  notional: number;
  margin: number;
  partialCollateralization?: boolean;
};

export type State = {
  transactions: Transaction[];
};

export type SerializedAMM = {
  id: string;
  updatedTimestamp: string;
  fcmAddress: string;
  marginEngineAddress: string;
  termStartTimestamp: string;
  termEndTimestamp: string;
  tickSpacing: string;
  tick: string;
  txCount: string;
  rateOracle: {
    id: string;
    protocolId: string;
    token: { id: string; name: string; decimals: string };
  };
};

export type ActionType =
  | 'mint'
  | 'burn'
  | 'swap'
  | 'updatePositionMargin'
  | 'add-transaction'
  | 'close-transaction'
  | 'update-transaction';

export type BaseAction = {
  type: ActionType;
  payload: Record<string, unknown>;
};

export type TransactionAction = BaseAction & {
  payload: {
    transaction: Transaction;
    amm: SerializedAMM;
  };
};

export type MintAction = TransactionAction & {
  type: 'mint';
};

export type BurnAction = TransactionAction & {
  type: 'burn';
};

export type SwapAction = TransactionAction & {
  type: 'swap';
};

export type UpdatePositionMarginAction = TransactionAction & {
  type: 'updatePositionMargin';
};

export type CloseTransactionAction = BaseAction & {
  type: 'close-transaction';
  payload: {
    transactionId: string;
  };
};

export type UpdateTransactionAction = BaseAction & {
  type: 'update-transaction';
  payload: {
    update: TransactionUpdate;
  };
};

export type Action =
  | MintAction
  | BurnAction
  | SwapAction
  | UpdatePositionMarginAction
  | CloseTransactionAction
  | UpdateTransactionAction;
