import { ContractReceipt, providers } from 'ethers';
import { call, put } from 'redux-saga/effects';
import { DateTime } from 'luxon';

import { RolloverMintAction } from '../../types';
import { deserializeAmm, getSigner } from '../../utilities';
import * as actions from '../../actions';
import { getErrorMessage } from '@utilities';
import { AMMRolloverWithMintArgs } from '@voltz-protocol/v1-sdk/dist/types/entities/amm';

function* rolloverMintSaga(action: RolloverMintAction) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const signer: providers.JsonRpcSigner | null = yield getSigner();

  if (!signer) {
    return;
  }

  const amm = deserializeAmm(action.payload.amm, signer);

  if (!amm) {
    return;
  }

  const { id, fixedLow, fixedHigh, notional, margin, marginEth, newMarginEngine, oldFixedHigh, oldFixedLow } = action.payload.transaction;
  if (!fixedLow || !fixedHigh) {
    return;
  }

  let result: ContractReceipt | void;
  try {
    const args:AMMRolloverWithMintArgs = {
      fixedLow,
      fixedHigh,
      notional,
      margin,
      marginEth,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/unbound-method
      owner: yield call([signer, 'getAddress']),
      newMarginEngine, 
      oldFixedLow: oldFixedLow,
      oldFixedHigh: oldFixedHigh,
      validationOnly: !!process.env.REACT_APP_ROLLOVER_VALIDATE_ONLY
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    result = yield call([amm, 'rolloverWithMint'], args);

  } catch (error) {
    yield put(
      actions.updateTransaction({
        id,
        failedAt: DateTime.now().toISO(),
        failureMessage: getErrorMessage(error),
      }),
    );

    return;
  }

  if (!result) {
    yield put(
      actions.updateTransaction({ id, failedAt: DateTime.now().toISO(), failureMessage: 'error' }),
    );
  } else {
    yield put(
      actions.updateTransaction({ id, succeededAt: DateTime.now().toISO(), txid: result.transactionHash }),
    );
  }
}

export default rolloverMintSaga;
