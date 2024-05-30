
//   const heading = React.createElement("h1", {}, "hello world form react"); // for one div 

// nested div 
import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement(
      "div",
      { id: "child" },[
      React.createElement("h1", {} , "hello world "),
      React.createElement("h1", {} , "hello akshit r2")
    ]),
    React.createElement(
      "div",
      { id: "child2" },[
      React.createElement("h1", {} , "hello akshit"),
      React.createElement("h1", {} , "hello akshit r2")
    ])

    ]
    
  );
  console.log(parent);

  const root = ReactDOM.createRoot(document.getElementById("root")); 

  root.render(parent);