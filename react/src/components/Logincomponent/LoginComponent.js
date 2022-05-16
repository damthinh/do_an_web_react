import React from 'react'
import imgLogin from '../../img/pexels-photo-583842.jpeg'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import Pop_upQuenMK from './Pop_upQuenMK'
import Pop_upDangKy from './Pop_upDangKy'
const Login = (props) => { 
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const background = {backgroundImage: `url(${imgLogin})` ,height:'97vh',
  // fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',}
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  return (
    <div style={background}>
      <Grid >
        <Paper elevation={10} style={paperStyle} >
          <Grid align='center'>
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2>Đăng nhập</h2>
          </Grid>
          <TextField label='Username' placeholder='Enter username' onChange={(e)=>{
            setEmail(e.target.value)
          }} fullWidth required />
          <TextField label='Password' placeholder='Enter password' type='password' onChange={(e)=>{
            setPassword(e.target.value)
          }}  fullWidth required />
          <Button type='submit' color='primary' 
          variant="contained" 
          style={btnstyle} fullWidth onClick={() => {
            props.LoginUserRequest({userName:Email,password:Password})
          }}>Sign in</Button>
          <Typography >
            <Pop_upQuenMK  {...props} /> 
          </Typography>
          <Typography > Bạn chưa có tài khoản ?

          </Typography>
          <div><Pop_upDangKy {...props}/></div>
        </Paper>
      </Grid>
    </div>
    
  )
}

export default Login