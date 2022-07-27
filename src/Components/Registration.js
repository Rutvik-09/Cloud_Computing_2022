import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import UserPool from "../Components/UserPool";
const axios = require("axios");

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    // if (name === "") {
    //   setErrorMessage("Name is required!");
    //   return;
    // }

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });

    alert("Registration successful");

    const registrationData = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(
        "https://e2gimgorl6.execute-api.us-east-1.amazonaws.com/test/register",
        registrationData
      )
      .then((response) => {
        alert("Details added!");
      })
      .catch((error) => {
        console.log("There was an error!!!");
      });
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item md={10} style={{ padding: "20px" }}>
        <Card
          style={{ alignItems: "center", margin: "10%", padding: "15px" }}
          component="form"
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography variant="h3" component="div" gutterBottom>
                Registration
              </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </Grid>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></TextField>
                {/* {errors.email && <p>{errors.email}</p>} */}
              </Grid>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter Password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>
            <Grid item sx={10} md={5}>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mb: 3 }}
                  onClick={handleSubmit}
                >
                  Register
                </Button>
                {errors && <p className="errors">{errors}</p>}
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Registration;
