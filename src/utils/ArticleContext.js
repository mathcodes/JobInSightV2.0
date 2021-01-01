import React from "react"; // we import React, 

// we call React.createContext
// we give it a title and url 
// propertes both as empty String
// then we export the Article Context  (which gets imported into the search directory)
//  

const ArticleContext = React.createContext({
  id:"",
  title: "",
  url: "",
  username: "User Name",
  usernameError: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: "",
  confirmPassword: "",
  confirmPasswordError: "",
  errors: {},
  redirect: false,
  handleBtnClick: () => {},
  term: "Test Term",
  query:"Test Query"
});

export default ArticleContext;
