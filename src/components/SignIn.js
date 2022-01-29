import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import Button from "components/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateResult, setValidateResult] = useState("");

  const validate = () => {
    return email.length > 0 && password.length > 0
      ? ""
      : "Please fill in the required information";
  };
  const submitForm = () => {
    setValidateResult(validate());
  };

  return (
    <div className="signInContainer">
      <div className="signInBackGround"></div>
      <div className="signInInputContainer">
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
      </div>
      <div className="signInInputContainer">
        <input
          type="password"
          placeholder="Password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="forgot">Forgot?</div>
      </div>
      <div className="validateResult">{validateResult}</div>
      <Button
        color=" #ef9bba"
        boxShadow="0 10px 16px 0 rgb(239 155 186 / 20%), 0 6px 20px 0 rgb(239 155 186 / 19%)"
        click={() => submitForm()}
      >
        SIGN IN
      </Button>

      <div className="socialMediaSignInContainer">
        <Button
          type="submit"
          color="#395795"
          boxShadow="0 10px 16px 0 rgb(57 87 149 / 20%), 0 6px 20px 0 rgb(57 87 149 / 19%)"
          icon={<FaFacebookF />}
        >
          FACEBOOK
        </Button>
        <div className="mt-10">
          <Button
            type="submit"
            color="#55aded"
            boxShadow="0 10px 16px 0 rgb(85 173 237 / 20%), 0 6px 20px 0 rgb(85 173 237 / 19%)"
            icon={<FaTwitter />}
          >
            TWITTER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
