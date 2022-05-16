import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentTaiKhoan from '../../components/ComponentTaiKhoan/ComponentTaiKhoan'
import * as actions from '../../actions/TaiKhoanAction'
import { getIdUser } from '../../constants'
export class ContainerTaiKhoan extends Component {
  componentDidMount(){
    this.props.getUserRequest({id_user:getIdUser()})
  }
  render() {
    return (
      <div><ComponentTaiKhoan {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({
  user:state.taiKhoan.user,
  listDiaChi:state.taiKhoan.listDiaChi
})

const mapDispatchToProps = (dispatch)=> {
  return{
    getUserRequest:(data)=>{
      dispatch(actions.getUserRequest(data))
    },
    doiPasswordRequest:(data)=>{
      dispatch(actions.doiPasswordRequest(data))
    },
    addDiaChiRequest:(data)=>{
      dispatch(actions.addDiaChiRequest(data))
    },
    updateDiaChiRequest:(data)=>{
      dispatch(actions.updateDiaChiRequest(data))
    },
    deleteDiaChiRequest:(data)=>{
      dispatch(actions.deleteDiaChiRequest(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTaiKhoan)