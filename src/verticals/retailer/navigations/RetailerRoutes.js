import React from "react";
import { Route, Routes } from 'react-router-dom';
import RetailerDashboard from "../pages/RetailerDashboard";
import RetailerAdd from "../pages/RetailerAdd";

function RetailerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RetailerDashboard />} />
      <Route path="/add" element={<RetailerAdd />} />
    </Routes>
  );
}

export default RetailerRoutes;
