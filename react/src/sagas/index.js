import { all } from 'redux-saga/effects';
import { AuthenSaga } from './AuthenSaga';
import { GioHangSaga } from './GioHangSaga';
import { HomeSaga } from './HomeSaga';
import { SanPhamSaga } from './QuanLySanPhamSaga';
import { TaiKhoanSaga } from './TaiKhoanSaga';
import { XemChiTietSaga } from './XemChiTietSaga';

export default function* rootSaga() {
  yield all([
    ...SanPhamSaga,
    ...AuthenSaga,
    ...HomeSaga,
    ...XemChiTietSaga,
    ...TaiKhoanSaga,
    ...GioHangSaga
  ]);
}