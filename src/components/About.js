import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/userContext";

class About extends React.Component {
    constructor(props){
        super(props)

        // console.log("Parent constructor")
    }

    componentDidCatch(){
        // console.log("Parent component did mount ")
    }

    render(){
        
        return(
            <div className="flex">
                <h1> About Me   </h1>
                <div>
                    Logged in user : 
                    <UserContext.Consumer>
                       {({loggedInUser}) => <h1 className="font-bold text-lg"> {loggedInUser} </h1>}
                    </UserContext.Consumer>
                </div>
                
                <p> this is the about page </p>
                <UserClass />
            </div>
        )   
    }
}
export default About ;