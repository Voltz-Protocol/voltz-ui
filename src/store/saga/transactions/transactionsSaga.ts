import { takeLatest } from 'redux-saga/effects';

import mintSaga from './mintSaga';
import swapSaga from './swapSaga';
import updatePositionMarginSaga from './updatePositionMarginSaga';
import settlePositionSaga from './settlePositionSaga';

function* transactionsSaga() {
  yield takeLatest('mint', mintSaga);
  yield takeLatest('swap', swapSaga);
  yield takeLatest('updatePositionMargin', updatePositionMarginSaga);
  yield takeLatest('settlePosition', settlePositionSaga)
}

export default transactionsSaga;
