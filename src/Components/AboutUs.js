import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function AboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom mt="50px">
          {
            "The goal of our application is to provide a platform to the local communities for selling their handicraft products."
          }
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom mt="50px">
          {
            " The customers can select the handicrafts of their choice from the website."
          }
        </Typography>
        <Typography mt="30px" variant="body1">
          Visit our homepage to view our products.
        </Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      ></Box>
    </Box>
  );
}

/*
Code reference - https://github.com/mui/material-ui/tree/v5.9.2/docs/data/material/getting-started/templates/sticky-footer
*/
