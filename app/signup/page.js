"use client";
import { Grid, Paper, Avatar, TextField, Button, Divider } from "@mui/material";
import "./LoginSignup.css";

const Login = () => {
  const action = "SignUp";

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
    <Grid style={bgg} className="bb bg-black">
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
          required
        />
        <TextField
          size="small"
          style={txtStyle}
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          required
        />

        <Grid>
          <Button
            variant="contained"
            className="normal-case"
            style= {buttonStyle}
          >
            SignUp
          </Button>
          <Divider>or</Divider>
          <Button
            variant="contained"
            href="/login"
            className="normal-case"
            style={buttonStyleCl}
          >
            LogIn
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
