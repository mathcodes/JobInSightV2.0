import React from "react"; // we import React, 

// we call React.createContext
// we give it a title and url 
// propertes both as empty String
// then we export the Article Context  (which gets imported into the search directory)
//  

const ArticleContext = React.createContext({
  title: "",
  url: ""
});

export default ArticleContext;
