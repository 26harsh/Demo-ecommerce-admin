import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from './components/Dashboard'
import Product from "./pages/Products/Product";
import Users from "./pages/Users/Users";
import AddProducts from "./pages/AddProducts/AddProduct.js";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      {/* <Dashboard /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  
          <Route path="/dashboard" element={<Dashboard name={userName}/>} />
          <Route path="/" element={<Home/>} />

          <Route path="/product" element={<Product name={userName}/>} />
          <Route path="/users" element={<Users name={userName}/>} />
          <Route path="/addProducts" element={<AddProducts name={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
