import { all } from 'redux-saga/effects';
import { AuthenSaga } from './AuthenSaga';
import { HomeSaga } from './HomeSaga';
import { SanPhamSaga } from './QuanLySanPhamSaga';
import { XemChiTietSaga } from './XemChiTietSaga';

export default function* rootSaga() {
  yield all([
    ...SanPhamSaga,
    ...AuthenSaga,
    ...HomeSaga,
    ...XemChiTietSaga
  ]);
}