import React, { Component } from 'react'
import ComponenetTableQyanLyDonHang from './ComponenetTableQyanLyDonHang'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import DanhMucComponent from '../DanhMucComponent';
export default class QuanLyDonHangComponent extends Component {
  render() {
    return (
      <Box >
        <Grid container spacing={2}>
          <Grid item xs="auto" sx={{ backgroundColor: "rgb(5, 30, 52)", height: '100vh' }} >
            <DanhMucComponent />
          </Grid>
          <Grid item xs={9.85}>
            <ComponenetTableQyanLyDonHang {...this.props} />
          </Grid>
        </Grid>
      </Box>
    )
  }
}
