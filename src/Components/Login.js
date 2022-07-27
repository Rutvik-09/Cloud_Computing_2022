import React, { useState, useContext } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import UserPool from "../Components/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import { AccountContext } from "./Accounts";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { authenticate } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!!!", data);
        navigate("/homepage", { replace: true });
      })
      .catch((err) => {
        console.log("Failed to login!!", err);
        alert("Invalid credentials!!");
      });

    // axios.post("");
    // const user = new CognitoUser({
    //   Username: email,
    //   Pool: UserPool,
    // });

    // const authDetails = new AuthenticationDetails({
    //   Username: email,
    //   Password: password,
    // });

    // user.authenticateUser(authDetails, {
    //   onSuccess: (data) => {
    //     console.log("onSucess: ", data);
    //     navigate("/homepage", { replace: true });
    //   },

    //   onFailure: (err) => {
    //     console.log("onFailure: ", err);
    //   },

    //   newPasswordRequired: (data) => {
    //     console.log("newPasswordRequired: ", data);
    //   },
    // });

    // authenticate(email, password)
    //   .then((data) => {
    //     console.log("Logged in!!", data);
    //   })
    //   .catch((err) => {
    //     console.error("Failed to login", err);
    //   });
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item md={10} style={{ padding: "50px" }}>
        <Card
          style={{ alignItems: "center", margin: "15%", padding: "15px" }}
          component="form"
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography variant="h3" component="div" gutterBottom>
                Login
              </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  placeholder="Enter Email"
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
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
