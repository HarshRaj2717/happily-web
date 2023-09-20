"use client";
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Divider } from '@mui/material';
import { useState,useEffect } from "react";
import { useRouter } from 'next/navigation';
import './style.css'
 

function Verification() {

    const [isCode,setCode]=useState("")
    const router = useRouter();
    const [email, setEmail] = useState(""); 

    useEffect(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
          setEmail(storedEmail); 
        }
      } 
    }, []);
 
 
    const ProcessVerify = (e)=>{
        e.preventDefault();
       
        if(validate()) 
        {
          fetch(`https://happily-backend.onrender.com/39e75598ba38f98a1721a064222b79c388c308621a792f3cc7b71d93661a5e75/auth/register/?email=${email}&format=json&code=${isCode}`)
          .then((res)=>{
            return res.json();
          }).then((resp)=>{
            console.log(resp)
            if(resp.success===1) 
            {
              console.log("Sign in success")
              router.push('/login')
            }
            else{
              console.log("Sign up failed")
            }
          }).catch((error) => {
            console.error('Error:', error);
          });
        }
      }

    const validate=()=>{
        let result=true;
        if(isCode==""||isCode==null)
        result=false;
        return result;
    }
    const bgg={width:'100%' , height:'100%', padding:'70px'}
    const paperStyle={padding :20,width:350, margin:"5% auto", borderRadius:20}
    const txtStyle={margin:10, width:'90%'}
    const buttonStyle = {
        backgroundColor:'#F5C03D',
        color: 'black', 
        margin:'15px',
        width:'90%',
    
      };
  return (
    <>
    <Grid style={bgg} className=''>
    <Paper style={paperStyle} variant="outlined">
    <TextField size='small' style={txtStyle} type='text' id="outlined-basic fullWidth" label="XXXXXX" onChange={(e)=>setCode(e.target.value)} variant="outlined" required />
    <Divider/>
    <Button variant="contained" onClick={ProcessVerify} style={buttonStyle}>verify</Button> 
    </Paper>
    </Grid>
    </>
  ) 
}

export default Verification