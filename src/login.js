import React from "react";
import ReactDOM from "react-dom";

function Login() {
  return (
    <div>
      <form>
        UserID : <input type="text" />
        <br />
        Password : <input type="password" />
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
}
export default Login;
