import React from "react";
import { Route, Routes } from 'react-router-dom';
import ConsumerDashboard from "../pages/ConsumerDashboard";
import ConsumerAdd from "../pages/ConsumerAdd";

function ConsumerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ConsumerDashboard />} />
      <Route path="/add" element={<ConsumerAdd />} />
    </Routes>
  );
}

export default ConsumerRoutes;
