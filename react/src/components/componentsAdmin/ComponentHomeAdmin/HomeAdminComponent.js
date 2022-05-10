// import '../component.css'
import React, { Component } from 'react'
import DanhMucComponent from '../DanhMucComponent'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Grid from '@mui/material/Grid';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import { width } from '@mui/system';
import ComponentMainHomeAdmin from './ComponentMainHomeAdmin';
import ComponentChartHomeAdmin from './ComponentChartHomeAdmin'
// import { display } from '@mui/system';
export default class HomeAdminComponent extends Component {


  render() {
    return (
      <div>
        <Grid container spacing={2} >
          <Grid item xs="auto" sx={{ backgroundColor: "rgb(5, 30, 52)", height: '100vh' }} >
            <DanhMucComponent />
          </Grid >
          <Grid item xs={9.85} sx={{ height: '100vh', backgroundColor: 'rgba(0,0,0,.1)' }}   >
            <Grid>
              <ComponentMainHomeAdmin />
            </Grid >
            <Grid  ><ComponentChartHomeAdmin /></Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
