
import React from "react";
import ReactDOM  from "react-dom/client";

 const Children =() =>  (
    <h1> children component </h1>
 );

 const number = 3003 ;

 const Parent = () => (
    <div>

     { Children()} 
     <Children/>
     <Children></Children>
    <h1> parent component </h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Parent/>)