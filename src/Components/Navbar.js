import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ data, cart }) {
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   navigate("/login", { replace: true });
  // };

  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ padding: "25px" }}
          onClick={() => navigate("/cart")}
        >
          <ShoppingCartRoundedIcon></ShoppingCartRoundedIcon>
          {cart.length}
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, padding: "20px" }}
        >
          HANDICRAFT E-STORE
          <Button
            href="/addproduct"
            color="inherit"
            sx={{ ml: "20px", fontSize: "20px" }}
          >
            Add Product
          </Button>
        </Typography>

        {/* 
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AccountCircleIcon></AccountCircleIcon>
        </IconButton> */}

        <Stack direction="row" spacing={3}>
          <Button href="/homepage" color="inherit" sx={{ fontSize: "20px" }}>
            Home
          </Button>
          <Button
            href="/registration"
            color="inherit"
            sx={{ fontSize: "20px" }}
          >
            Registration
          </Button>
          <Button href="/aboutus" color="inherit" sx={{ fontSize: "20px" }}>
            About
          </Button>
          <Button href="/" color="inherit" sx={{ fontSize: "20px" }}>
            {/* <Link to="/login"></Link> */}
            Logout
          </Button>
        </Stack>

        {/* <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SearchIcon></SearchIcon>
        </IconButton>
        <Box>
          <Typography variant="h5" component="div">
            Search
          </Typography>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
