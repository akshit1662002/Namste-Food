import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props)

        // console.log("Parent constructor")
    }

    componentDidCatch(){
        // console.log("Parent component did mount ")
    }

    render(){
        console.log("Parent render")
        return(
            <div>
                <h1> About Page  </h1>
                <p> this is the about page </p>
                <UserClass />
            </div>
        )   
    }
}
export default About ;