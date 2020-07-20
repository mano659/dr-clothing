import React from "react";
import Login from "../../components/log-in/log-in";
import SignUp from "../../components/sign-up/sign-up";
import "./loginpage.scss";

const LoginPage = () => (
  <div className="sign-in-and-sign-up">
    <Login></Login>
    <SignUp></SignUp>
  </div>
);

export default LoginPage;
