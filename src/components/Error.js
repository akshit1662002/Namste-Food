import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div> 
            <h1>  oooopppppsssss...!!!! </h1>
            <h1> something went wrong .......</h1>
            <h1> {error.status} : {error.statusText } </h1>
            
            <h1> {error.data }</h1>
        </div>
    )
}

export default Error ;