import logo from "./logo.svg";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { Account } from "./Components/Accounts";
import Status from "./Components/Status";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import AboutUs from "./Components/AboutUs";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.indexOf(item) !== -1) {
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, count) => {
    const index = cart.indexOf(item);
    const cartArray = cart;
    cartArray[index].amount += count;
    if (cartArray[index].amount === 0) {
      cartArray[index].amount = 1;
    }
    console.log(cartArray);
    setCart([...cartArray]);
  };

  useEffect(() => {
    axios
      .get(
        "https://e2gimgorl6.execute-api.us-east-1.amazonaws.com/test/homepage"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // console.log(response.status);
      });
  }, []);

  return (
    <div className="app">
      <Navbar data={data} cart={cart}></Navbar>
      <Account>
        <Status></Status>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route
            path="/registration"
            element={<Registration></Registration>}
          ></Route>
          <Route
            path="/homepage"
            element={
              <HomePage
                data={data}
                addToCart={addToCart}
                handleChange={handleChange}
              ></HomePage>
            }
          ></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleChange={handleChange}
                setCart={setCart}
              ></Cart>
            }
          ></Route>
        </Routes>
      </Account>

      {/* <Routes>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>
        <Route path="/homepage" element={<HomePage></HomePage>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
