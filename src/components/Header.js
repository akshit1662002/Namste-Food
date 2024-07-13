import { LOGO_URL } from "../utils/constant";
import { useState ,  useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  
  const [btnName , setBtnName ] = useState("Log in");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect Render")
  } ,[btnName] );

  
  return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li> Online Status : {onlineStatus ?  "✅" : "❌" } </li>
            <li> <Link to="/"> Home </Link> </li>
            <li><Link to="/about"> About </Link>  </li>
            <li> <Link to="/contact"> Contact Us </Link> </li>
            <li> <Link to="/grocery"> Grocery </Link> </li>
            <li> Cart </li>
            <button className="loginbtn" onClick={() => { btnName === "Log in" ?  setBtnName("log out") :  setBtnName("Log in"); 
            }}>
              {btnName} </button>
          </ul>
        </div>
      </div>
    );
  };


export default Header ;