import React from "react";
import { LogOut } from "../../../common/components/LoginPage/Login";
function ConsumerDashboard() {
  // const navigate=useNavigate();
  const { FullName, Email } = JSON.parse(sessionStorage.getItem("userLogInfo"));
  // const { user } = JSON.parse(sessionStorage.getItem("userCredInfo"));

  return (
    <div>
      ConsumerDashboard
      <h1>{FullName}</h1>
      <h1>{Email}</h1>
      <LogOut/>
  
    </div>
  );
}

export default ConsumerDashboard;
