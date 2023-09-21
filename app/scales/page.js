"use client"
import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import './Questionnaire.css';
import { useRouter } from 'next/navigation';

function Questionnaire() {
  const [scaleData, setScaleData] = useState([]);
  const [isClicked,setClicked]=useState("");
  const pageDim = { width: '100%', height: '100vh' };
  const heading = { padding: '20px', fontWeight: 700 };
  const headingScales = { padding: '15px', fontWeight: 300 };
  const router = useRouter();



  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('https://happily-backend.onrender.com/39e75598ba38f98a1721a064222b79c388c308621a792f3cc7b71d93661a5e75/scales/')
      .then((response) => response.json())
      .then((data) => setScaleData(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  // Render the list of scale names
  const scaleNames = scaleData['All scale names'] || [];

  const Clicked=(scaleName)=>{
    setClicked(scaleName);
    const temp=scaleData[scaleName];
    console.log(temp["link"])
    localStorage.setItem('scale',temp["link"])
    router.push('/scales/ScaleQuestions')

  } 

  

  return (
    <Grid className='bb' style={pageDim}>
      <div className='container'>
        <Typography style={heading} variant='h2' gutterBottom>
          Scales
        </Typography>


        {scaleNames.map((scaleName, index) => (
        <Paper onClick={()=>Clicked(scaleName)} key={index} elevation={3} style={{cursor:"pointer", margin: '10px', padding: '10px' }} >
          {scaleName}
        </Paper>
      ))}

      </div>
    </Grid>
  );
}

export default Questionnaire;


/* <Box display="flex" flexDirection="column" gap={'15px'}>
          <Paper>
            <div style={headingScales}>
            Gender Dysphoria Scale (Female Assigned at Birth)
            </div>
          </Paper>
          <Paper>
            <div style={headingScales}>
            Gender Dysphoria Scale (Male Assigned at Birth)
            </div>
          </Paper>
          <Paper>
            <div style={headingScales}>
            Depression Anxiety Stress Scales - Youth Version
            </div>
          </Paper>
          </Box> */