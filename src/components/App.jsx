import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Form registeredOrNot="Login" />
      ) : (
        <Form
          input={<input type="password" placeholder="Confirm Password" />}
          registeredOrNot="Register"
        />
      )}
    </div>
  );
}

export default App;
