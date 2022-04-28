
import React, { Component } from 'react'
import DanhMucComponent from '../DanhMucComponent';
import TableComponentQuanLySanPham from './TableComponentQuanlySanPham'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default class extends Component {
    state = {
        textSearch: '',
        onClick: ''
    }
    render() {
        return (
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs="auto" sx={{ backgroundColor: "rgb(5, 30, 52)", height: '100vh'}} >
                        <DanhMucComponent/>
                    </Grid>
                    <Grid item xs={9.85}>
                    
                    <TableComponentQuanLySanPham {...this.props} />
                    </Grid>
                </Grid>
            </Box>
        )
    }
}
