import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import Cart from "./Cart";

const HomePage = ({ data, addToCart, handleChange }) => {
  // const [data, setData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://e2gimgorl6.execute-api.us-east-1.amazonaws.com/test/homepage"
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setData(response.data);
  //       // console.log(response.status);
  //     });
  // }, []);

  return (
    <div>
      {data.map((item, index) => (
        <Card
          key={index}
          item={item}
          sx={{
            maxWidth: 500,
            margin: "3%",
            padding: "3%",
            background:
              "linear-gradient(to bottom left, lightgreen, lightblue)",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={30}
            align="center"
            fontFamily={"Arial"}
            fontWeight={"bold"}
          >
            {item.name}
          </Typography>
          <CardMedia
            component="img"
            height="350"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="purple"
              fontSize={30}
              sx={{ m: "2%" }}
            >
              Category: {item.category}
            </Typography>

            <Typography
              variant="body2"
              color="red"
              fontSize={30}
              sx={{ m: "2%" }}
            >
              Price: ${item.amount}
            </Typography>

            <Typography
              variant="body2"
              color="blue"
              fontSize={30}
              sx={{ m: "2%" }}
            >
              Color: {item.color}
            </Typography>

            <Typography
              variant="body2"
              color="black"
              fontSize={30}
              sx={{ m: "2%" }}
            >
              Location: {item.location}
            </Typography>
          </CardContent>
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mb: 2, fontSize: 20 }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
