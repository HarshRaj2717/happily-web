"use client";
import { React, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Typography, colors } from "@mui/material";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import "./ScaleQuestions.css";
import Card from "@mui/joy/Card";

function ScaleQuestions({ params }) {
  const [isData, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswer, setAnswer] = useState(0);
  const [isClicked, setClicked] = useState(false);
  const [displayResult, setDisplayresult] = useState(false);
  const [userRes, setUserRes] = useState("");
  const router = useRouter();

  fetch(
    `https://happily-backend.onrender.com/39e75598ba38f98a1721a064222b79c388c308621a792f3cc7b71d93661a5e75/scales/${params.scale_link}`
  )
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => console.error("Error:", error));

  const scaleQuestions = isData["questions"] || [];
  const options = isData["choices"] || [];

  const ChangeQuestion = () => {
    if (currentQuestion + 1 != scaleQuestions.length) {
      setUserRes(userRes + `${isAnswer},`);
      setCurrentQuestion(currentQuestion + 1);
      console.log(userRes);
      setAnswer(0);
    } else {
      setDisplayresult(true);
      router.push(
        `/scales/${params.scale_link}/result/?scale_link=${params.scale_link}&user_res=${userRes}${isAnswer}`
      );
    }
    setClicked(false);
  };

  const buttonStyle = {
    backgroundColor: "#F5C03D",
    color: "black",
    margin: "15px",
    width: "20%",
  };
  const pageDim = { width: "100%", height: "100vh" };
  const heading = { padding: "20px", fontWeight: 700, color: "black" };
  const headingScales = { padding: "15px", fontWeight: 300 };
  const heading2 = { padding: "", fontWeight: 400 };

  return (
    <Grid className="bb" style={pageDim}>
      <div className="container">
        <Typography style={heading} variant="h4" gutterBottom>
          {scaleQuestions[currentQuestion]}
        </Typography>

        {options.map((option, index) => (
          <Card
            className={`cursor-pointer m-2 ${
              isClicked && isAnswer === index + 1 ? "!bg-yellow-200" : ""
            }`}
            onClick={() => {
              setAnswer(index + 1);
              setClicked(true);
            }}
            key={index}
          >
            <Typography style={heading2} variant="h6" gutterBottom>
              {option}
            </Typography>
          </Card>
        ))}

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
  );
}

export default ScaleQuestions;
