import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Products from "./Products";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <div className="header">
        <NavLink activeClassName="active" to ="/">Home</NavLink>
        <NavLink activeClassName="active" to="/register">Register</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/products">Products</NavLink>

      </div>

      <div className="content">
        <Routes>
          <Route exact path="/" element = {<Home></Home>}/>
          <Route exact path="/register" element = {<Register></Register>}/>
          <Route exact path="/login" element = {<Login></Login>}/>
          <Route exact path="/products" element = {<Products></Products>}/>

        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Code References:
https://www.youtube.com/watch?v=ReNkQ0Xkccw&t=0s&ab_channel=FelixYu
*/
