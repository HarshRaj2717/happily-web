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


function ScaleQuestions() { 
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [isScale,setScale]=useState("");
    const [helperText, setHelperText] = useState('Choose wisely');
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (typeof window !== 'undefined' && window.localStorage) {
            const storedScale = localStorage.getItem('scale');
            if (storedScale) {
              setScale(storedScale); 
            }
        // Fetch questions from the API when the component mounts
        fetch('https://your-api-url-here.com/questions')
          .then((response) => response.json())
          .then((data) => {
            setQuestions(data.questions);
            setLoading(false);
          })
          .catch((error) => console.error('Error:', error));
      }, []);

    const buttonStyle = {
      backgroundColor:'#F5C03D',
      color: 'black', 
      margin:'15px',
      width:'90%',
    };
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };
  
  const pageDim = { width: '100%', height: '100vh' };
  const heading = { padding: '20px', fontWeight: 700 };
  const headingScales = { padding: '15px', fontWeight: 300 };
  const heading2={padding:''}

  return (
    <Grid className='bb' style={pageDim}>
        <div className='container'>
        <Typography style={heading} variant='h4' gutterBottom>
          <span>lorem</span>
        </Typography>
        <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios" style={{ color: 'grey' }}>Your Answer</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="always" />
          <FormControlLabel value="2" control={<Radio />} label="often" />
          <FormControlLabel value="3" control={<Radio />} label="sometimes" />
          <FormControlLabel value="4" control={<Radio />} label="rarely" />
          <FormControlLabel value="5" control={<Radio />} label="never" />

        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained" style={buttonStyle}>
          Submit
        </Button>
      </FormControl>
    </form>
    </div>
    </Grid>
  )
}

export default ScaleQuestions;

