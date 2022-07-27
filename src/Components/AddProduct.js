import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function AddProduct() {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const navigate = useNavigate();

  const uploadImage = (file) => {
    console.log("uploaded file");
    console.log(file);
    let reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      console.log("file uploaded");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(category);
    console.log(quantity);
    console.log(amount);
    console.log(color);
    console.log(location);

    const productData = {
      name: name,
      category: category,
      image: image,
      quantity: quantity,
      amount: amount,
      color: color,
      location: location,
    };

    axios
      .post(
        "https://e2gimgorl6.execute-api.us-east-1.amazonaws.com/test/products",
        productData
      )
      .then((response) => {
        alert("Details for the product added!");
        navigate("/homepage");
      })
      .catch((error) => {
        console.log("There was an error!!!");
      });
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item md={10} style={{ padding: "50px" }}>
        <Card
          style={{ alignItems: "center", margin: "7%", padding: "15px" }}
          component="form"
        >
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item xs={12} md={10}>
              <Typography variant="h3" component="div" gutterBottom>
                Add Handicraft
              </Typography>
            </Grid>
            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></TextField>
                {/* {errors.email && <p>{errors.email}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <FormControl sx={{ width: "100%" }} required>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    value={category}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Paper-crafts"}>Paper crafts</MenuItem>
                    <MenuItem value={"Decorative-crafts"}>
                      Decorative crafts
                    </MenuItem>
                    <MenuItem value={"Fashion-crafts"}>Fashion crafts</MenuItem>
                    <MenuItem value={"Functional-crafts"}>
                      Functional crafts
                    </MenuItem>
                    <MenuItem value={"Textile-crafts"}>Textile crafts</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <Button
                  fullWidth
                  className="uploadImage"
                  variant="outlined"
                  accept="image"
                  value={image}
                >
                  {" "}
                  <input
                    type="file"
                    name="file"
                    required
                    onChange={(e) => {
                      uploadImage(e.currentTarget.files[0]);
                    }}
                  />{" "}
                </Button>
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter Quantity"
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  name="quantity"
                  pattern="/^\d*[1-9]\d*$/"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter Amount"
                  label="Amount"
                  variant="outlined"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  pattern="/^\d*[1-9]\d*$/"
                  required
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter the color"
                  label="Color"
                  variant="outlined"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                ></TextField>
                {/* {errors.password && <p>{errors.passwprd}</p>} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2} justifyContent="center">
              <Grid item xs={10} md={5}>
                <TextField
                  fullWidth
                  placeholder="Enter the location"
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                  Add Handicraft
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddProduct;
