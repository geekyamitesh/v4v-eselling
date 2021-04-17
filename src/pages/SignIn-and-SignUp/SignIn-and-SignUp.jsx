import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";

import "./SignIn-and-SignUp.scss";
import SignUp from "../../components/signup-component/signup-component";
const SignInSignUpage = () => (
  <div className="sign-in-and-sign-Up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInSignUpage;
