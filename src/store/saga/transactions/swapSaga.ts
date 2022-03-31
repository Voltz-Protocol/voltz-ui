import { ContractTransaction, providers } from 'ethers';
import { call, put } from 'redux-saga/effects';
import { DateTime } from 'luxon';

import { Agents } from '@components/contexts';
import { SwapAction } from '../../types';
import { deserializeAmm, getSigner, getMessageError } from '../../utilities';
import * as actions from '../../actions';

function* swapSaga(action: SwapAction) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const signer: providers.JsonRpcSigner | null = yield getSigner();

  if (!signer) {
    return;
  }

  const amm = deserializeAmm(action.payload.amm, signer);

  if (!amm) {
    return;
  }

  const { id, agent, notional, margin } = action.payload.transaction;

  let result: ContractTransaction | void;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    result = yield call([amm, 'swap'], {
      isFT: agent === Agents.FIXED_TRADER,
      notional,
      margin,
      fixedLow: 1,
      fixedHigh: 2.01,
    });
  } catch (error) {
    yield put(
      actions.updateTransaction({
        id,
        failedAt: DateTime.now().toISO(),
        failureMessage: getMessageError(error)
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
      actions.updateTransaction({ id, succeededAt: DateTime.now().toISO(), txid: result.hash }),
    );
  }
}

export default swapSaga;
