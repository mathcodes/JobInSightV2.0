import React from "react";
import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <div className="">
      <div className="d-flex p-2 bd-highlight flexboxTest">
        I'm a flexbox container!
      </div>
      <button type="button" className="btn btn-dark align-items-center">
        Login or SignUp
      </button>
      <Footer />
    </div>
  );
}

export default Login;
