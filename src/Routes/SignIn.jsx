/* The SignIn route
As we discussed above, this is where the user will sign in using Google. We will use the useFirebase Hook, which RRF provides a firebase object. With this, we can implement some basic Firebase functionality, such as pushing to a database and logging in with a different auth providers.

We will use the login method of this object to implement the Google sign-in functionality. This method will take, as an argument, an object in which the provider and method of signing in will be defined.

We will use the useHistory Hook from react-router to programmatically navigate to the todos route after the user has been logged in. Your SignIn component should be very similar to this:
 */
import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase
      .login({
        provider: "google",
        type: "popup",
      })
      .then(() => {
        history.push("/todos");
      });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          signInWithGoogle();
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
};
export default SignIn;