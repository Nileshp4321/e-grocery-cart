import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Text from "./Text";
import NavBar from "./common/components/Navbar/NavBar.jsx";
import Home from "./common/components/Home/Home.jsx";
import Login from "./common/components/Login/Login.jsx";
import RetailerRoutes from "./verticals/retailer/navigations/RetailerRoutes";
import ConsumerRoutes from "./verticals/consumer/navigations/ConsumerRoutes";

function App() {
  const [user, setUser] = useState({
    role: "retailer",
  });
  return (
    <BrowserRouter>
      {user && user.role === "" ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Text />}></Route>
        <Route path="/contact" element={<Text />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/retailer/*"
          element={
            user && user.role === "retailer" ? (
              <RetailerRoutes />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/consumer/*"
          element={
            user && user.role === "consumer" ? (
              <ConsumerRoutes />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
