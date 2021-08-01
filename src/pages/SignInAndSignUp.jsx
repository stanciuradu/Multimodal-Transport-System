import React from "react";
import "../pages/SignInAndSignUp.scss";
import SignIn from "../components/SignIn";
import Register from "../components/Register";

function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Register />
    </div>
  );
}

export default SignInAndSignUp;
