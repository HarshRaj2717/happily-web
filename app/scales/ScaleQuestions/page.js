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
    const [isScale,setScale]=useState("");
    const [isData, setData] = useState([]);
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [isAnswer,setAnswer]=useState(0);
    const [isClicked,setClicked]=useState(false)
    const [displayResult,setDisplayresult]=useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
  

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
          }) 
          .catch((error) => console.error('Error:', error));


          
        
       

        const scaleQuestions=isData["questions"]||[]  
        const options=isData["choices"]||[]


        useEffect(() => {
          // Initialize selectedAnswers array with the same length as scaleQuestions
      setSelectedAnswers(new Array(scaleQuestions.length).fill(-1));
      }, [scaleQuestions]);

        

        const ChangeQuestion=()=>{
        if(currentQuestion!=scaleQuestions.length)
        {
          setCurrentQuestion(currentQuestion+1)
        }
        else{
          setCurrentQuestion(0);
          setDisplayresult(true);
          const answersString = selectedAnswers.join(',');
          console.log(answersString);
        }
        setClicked(false)

      }
      
   
      const buttonStyle = {
      backgroundColor:'#F5C03D',
      color: 'black', 
      margin:'15px',
      width:'20%',
    };
  const pageDim = { width: '100%', height: '100vh' };
  const heading = { padding: '20px', fontWeight: 700 };
  const headingScales = { padding: '15px', fontWeight: 300 };
  const heading2={padding:'', fontWeight:400}

  return (
    <Grid className='bb' style={pageDim}>
        <div className='container'>


        
        <Typography style={heading} variant='h4' gutterBottom >
        {scaleQuestions[currentQuestion]}
        </Typography>

        {options.map((option,index)=>(
        <Card  className={`cursor-pointer m-2 ${
          isClicked && isAnswer === index ? 'bg-yellow-200' : ''  }`} 
          onClick={()=>{ setAnswer(index);
          setClicked(true);
          setSelectedAnswers((prevAnswers) => {
          const updatedAnswers = [...prevAnswers];
          updatedAnswers[currentQuestion] = index;
          return updatedAnswers;
          });
          }}  key={index} ><Typography style={heading2} variant='h6' gutterBottom>{option}</Typography></Card>))}


        <Button
            size="medium"
            variant="contained"
            className="normal-case"
            style={buttonStyle}
            onClick={ChangeQuestion}
          >
            {currentQuestion === scaleQuestions.length - 1 ? "Finish" : "Next"}
          </Button>
    </div>
    </Grid>
  )
}

export default ScaleQuestions; 

