"use client"
import {React, useState,useEffect} from 'react'
import { Typography, colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import './ScaleQuestions.css';
import Card from '@mui/joy/Card';



function ScaleQuestions() { 
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [isScale,setScale]=useState("");
    const [helperText, setHelperText] = useState('Choose wisely');
    const [isData, setData] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (typeof window !== 'undefined' && window.localStorage) {
            const storedScale = localStorage.getItem('scale');
            if (storedScale) {
              setScale(storedScale);  
            }}
          },[]); 




          
        fetch(`https://happily-backend.onrender.com/39e75598ba38f98a1721a064222b79c388c308621a792f3cc7b71d93661a5e75/scales/${isScale}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch((error) => console.error('Error:', error));
        
       

        const scaleQuestions=isData["questions"]||[]  
        const options=isData["choices"]||[]

    const buttonStyle = {
      backgroundColor:'#F5C03D',
      color: 'black', 
      margin:'15px',
      width:'90%',
    };
  const pageDim = { width: '100%', height: '100vh' };
  const heading = { padding: '20px', fontWeight: 700 };
  const headingScales = { padding: '15px', fontWeight: 300 };
  const heading2={padding:'', fontWeight:400}













  return (
    <Grid className='bb' style={pageDim}>
        <div className='container'>


        {scaleQuestions.map((question, index) => (
        <Typography style={heading} variant='h4' gutterBottom key={index}>
        {question}
        </Typography>
        ))}

        {options.map((option,index)=>(
        <Card className="cursor-pointer m-2 bg-yellow-200" key={index} ><Typography style={heading2} variant='h6' gutterBottom>{option}</Typography></Card>))}
    </div>
    </Grid>
  )
}

export default ScaleQuestions;

