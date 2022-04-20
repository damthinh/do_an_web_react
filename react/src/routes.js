import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import * as AdminPage from './pages/AdminPage';

import * as page from './pages/';
import history from './history'

const Routes = () => (
  <div className="content">
    <Router history={history}>
      <Switch>

        
        
        <Route exact path="/home" component={page.HomePage} />
        <Route exact path="/chitietsanpham" component={page.ChiTietSanPhamPage} />
        <Route exact path="/giohang" component={page.GioHangPage} />
        
        <Route exact path="/thantoan" component={page.ThanToanPage} />
        <Route exact path="/donhang" component={page.DonHangPage} />
        <Route exact path="/taikhoan" component={page.TaiKhoanPage} />
      


        <Route exact path="/" component={page.LoginPage} />
        <Route exact path="/items" component={page.ItemPage} />
        <Route exact path="/quanlysanpham" component={AdminPage.QuanLySanPham} />
        
        <Route exact path="/quanlydonhang" component={AdminPage.PageQuanLyDonHang} />
        <Route exact path="/homeadmin" component={AdminPage.HomeAdmin} />
      </Switch>
    </Router>
  </div>
);

export default Routes;
