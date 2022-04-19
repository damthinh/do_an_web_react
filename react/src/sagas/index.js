import { all } from 'redux-saga/effects';
import { AuthenSaga } from './AuthenSaga';
import { SanPhamSaga } from './QuanLySanPhamSaga';

export default function* rootSaga() {
  yield all([
    ...SanPhamSaga,
    ...AuthenSaga
  ]);
}