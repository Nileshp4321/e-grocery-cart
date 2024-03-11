import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Text from "./Text";
import NavBar from "./common/components/Navbar/NavBar.jsx";
import Home from "./common/components/Home/Home.jsx";
import Login from "./common/components/LoginPage/Login.jsx";
import RetailerRoutes from "./verticals/retailer/navigations/RetailerRoutes";
import ConsumerRoutes from "./verticals/consumer/navigations/ConsumerRoutes";
import { User } from "./context/UserType.js";
import About from "./common/components/Home/About.jsx";


function App() {
  const [userRole, setUserRole] = useState('retailer');
  const [user, setUser] = useState(false);

  const navBarItem = ['Home', 'About', 'Contact', 'Login']
  return (
    <BrowserRouter>
      <User.Provider value={{userRole,setUserRole,user,setUser}}>
      { user ? null : <NavBar navBarItem={navBarItem} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Text />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/retailer/*"
          element={
            user ? (
              <RetailerRoutes />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/consumer/*"
          element={
            user ? (
              <ConsumerRoutes />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      </User.Provider>
    </BrowserRouter>
  );
}

export default App;
