import { useState } from "react";

const User = ({name}) => {
    const [Count] = useState(0);
    const [Count2] = useState(0);
    return(
        
        <div className="user-card">
            <h1> Count = {Count} </h1>
            <h1> Count2 = {Count2} </h1>
            <h2> {name} </h2>
            <h3> Loaction : Moradabad </h3>

        </div>
        
        
        
        
    );
}

export default User ;