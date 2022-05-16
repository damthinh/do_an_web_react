import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from "../../actions/AuthenAction"
import LoginComponent from '../../components/Logincomponent/LoginComponent' 
export class LoginContainer extends Component {
  render() {
    return (
      <div><LoginComponent {...this.props}/></div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch)=> {
  return{
    DangKyUserRequest:(data)=>{
      dispatch(actions.DangKyUserRequest(data))
    },
    LoginUserRequest:(data)=>{
      dispatch(actions.LoginUserRequest(data))
    },
    quenMkUserRequest:(data)=>{
      dispatch(actions.quenMkUserRequest(data))
    },
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)