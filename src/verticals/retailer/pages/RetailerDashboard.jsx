import React from "react";
import { LogOut } from "../../../common/components/LoginPage/Login";

function RetailerDashboard() {
  const { FullName, Email } = JSON.parse(sessionStorage.getItem("userLogInfo"));
  return (
    <div>
      RetailerDashboard
      {
        <>
          <h1>{FullName}</h1>
          <h1>{Email}</h1>
          <h1>HEllo</h1>
          <LogOut />
        </>
      }
    </div>
  );
}

export default RetailerDashboard;
