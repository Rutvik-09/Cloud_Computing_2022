import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import data from "./HomePage";

function Cart({ cart, handleChange, setCart }) {
  const [price, setPrice] = useState(0);

  const handlePayment = (e) => {
    alert("Payment Successful");
  };

  const handleRemove = (id) => {
    const cartArray = cart.filter((item) => item.name !== id);
    setCart(cartArray);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.quantity));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      <Typography
        variant="h3"
        fontFamily={"Arial"}
        fontWeight={"bold"}
        align={"center"}
      >
        Items added to the Cart
      </Typography>
      {cart.map((item, index) => (
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
              Price: $ {item.amount}
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

          <Box textAlign={"center"}>
            <Button
              sx={{ fontSize: 30, color: "black" }}
              onClick={() => handleRemove(item.name)}
            >
              Remove
            </Button>
          </Box>

          {/* <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mb: 2, fontSize: 20 }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </Box> */}
        </Card>
      ))}
      {cart.length === 0 && <h1>No Items to display!!</h1>}
      <Card
        sx={{
          maxWidth: 300,
          margin: "3%",
          padding: "2%",
          background: "linear-gradient(to bottom left, lightgreen, lightblue)",
        }}
      >
        <Typography
          variant="body2"
          color="black"
          fontSize={30}
          fontFamily={"Arial"}
          fontWeight={"bold"}
          sx={{ m: "2%" }}
        >
          Total price : $ {price}
        </Typography>
      </Card>
      <Box
        sx={{
          maxWidth: 300,
          margin: "3%",
          padding: "2%",
          background: "linear-gradient(to bottom left, lightgreen, lightblue)",
        }}
      >
        <Button
          sx={{
            fontSize: 25,
            color: "black",
            fontFamily: "Arial",
            fontWeight: "bold",
          }}
          onClick={handlePayment}
        >
          Proceed to Payment
        </Button>
      </Box>
    </div>
  );
}

export default Cart;
