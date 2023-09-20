"use client";
import { Grid, Paper, Avatar, TextField, Button, Divider } from "@mui/material";
import "./LoginSignup.css";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Login = () => {
  const action = "LogIn";
  const [isEmail,setEmail]=useState("")
  const [isPassword, setPassword]=useState("")

  const ProcessLogin = (e)=>{
    e.preventDefault();
   
    if(validate())
    {
      fetch(`${process.env.origin_link}/${process.env.frontend_secret_key}/auth/login/?email=${isEmail}&format=json&password=${isPassword}`)
      .then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp)
        if(resp.success===1)
        {
          console.log("login success")
          // router.push('') needs to be linked
         
        }
        else{
          console.log("login failed")
        }
      }).catch((error) => {
        console.error('Error:', error);
      });
    }
  }

  const validate=()=>{
    let result=true;
    if(isEmail==""||isEmail==null){
      result=false;
    }
    if(isPassword==""||isPassword==null){
       result=false;
      }
    
    return result;
  }

  const bgg = { width: "100%", height: "100%", padding: "70px" };
  const paperStyle = {
    padding: 20,
    width: 350,
    margin: "5% auto",
    borderRadius: 20,
  };
  const avatarStyle = { backgroundColor: "#F5C03D" };
  const txtStyle = { margin: 10, width: "90%" };
  const buttonStyleCl = {
    backgroundColor: "#ababab",
    color: "black",
    margin: "15px",
    width: "90%",
  };
  const buttonStyle = {
    backgroundColor: "#F5C03D",
    color: "black",
    margin: "15px",
    width: "90%",
  };

  return (
    <Grid style={bgg} >
      <Paper style={paperStyle} variant="outlined">
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>{action}</h2>
        </Grid>

        <TextField
          size="small"
          style={txtStyle}
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={isEmail} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <TextField
          size="small"
          style={txtStyle}
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={isPassword} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />

        <Grid>
          <Button
            variant="contained"
            className="normal-case"
            style= {buttonStyle}
            onClick={ProcessLogin}
          >
            Login
          </Button>
          <Divider>or</Divider>
          <Button
            variant="contained"
            href="/signup"
            className="normal-case"
            style={buttonStyleCl}
          >
            SignUp
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
