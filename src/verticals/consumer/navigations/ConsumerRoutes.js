import React from "react";
import { Route, Routes } from 'react-router-dom';
import ConsumerDashboard from "../pages/ConsumerDashboard";
import ConsumerAdd from "../pages/ConsumerAdd";
import { Provider } from "react-redux";
import store from "../store";

function ConsumerRoutes() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<ConsumerDashboard />} />
      <Route path="/consumer" element={<ConsumerDashboard />} />
      <Route path="/add" element={<ConsumerAdd />} />
    </Routes>
    </Provider>
  );
}

export default ConsumerRoutes;
