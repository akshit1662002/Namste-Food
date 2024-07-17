import { LOGO_URL } from "../utils/constant";
import { useState ,  useEffect , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
  
  const [btnName , setBtnName ] = useState("Log in");

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  //console.log(loggedInUser)

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);


  
  return (
      <div className="flex justify-between bg-pink-100 shadow-lg  ">
        <div className="logo-container">
          <img
            className="w-56"
            src= {LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4"> Online Status : {onlineStatus ?  "✅" : "❌" } </li>
            <li className="px-4"> <Link to="/"> Home </Link> </li>
            <li className="px-4"><Link to="/about"> About </Link>  </li>
            <li className="px-4"> <Link to="/contact"> Contact Us </Link> </li>
            <li className="px-4"> <Link to="/grocery"> Grocery </Link> </li>
            <li className="px-4 font-bold "> <Link to="/cart"> Cart-({cartItems.length} items ) </Link></li>
            <button className="loginbtn" onClick={() => { btnName === "Log in" ?  setBtnName("log out") :  setBtnName("Log in"); 
            }} >
              {btnName} </button>
            <li className="px-4 font-bold"> {loggedInUser} </li>
          </ul>
        </div>
      </div>
    );
  };


export default Header ;