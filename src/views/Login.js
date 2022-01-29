import React from "react";
import Back from "components/Back";
import { useHistory } from "react-router-dom";

import SignIn from "components/SignIn";

const Login = () => {
  const history = useHistory();

  return (
    <div className="login">
      <Back page="/" click={() => history.push("/")} />
      <SignIn />
    </div>
  );
};

export default Login;
