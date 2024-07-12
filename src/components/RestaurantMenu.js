import {useState,  useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";



const RestaurantMenu = () => {
 const [resInfo , setResInfo] = useState(null);

const {resId} = useParams();


useEffect(() => {
    fetchMenu();
} , [])

const fetchMenu = async() => {
    const data = await fetch( MENU_API  + resId );
    const json = await data.json();
    setResInfo(json.data);
} ;
if(resInfo === null) return <Shimmer /> ;


const  {name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info ;

const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ; 


    return(
        <div className="menu">
            <h2> {name}</h2>
            <h2>  {"["}{cuisines.join(" , ")} {"]"}   - {costForTwoMessage} </h2>
            <h2> MENU </h2>
            
            <ul>
                {itemCards.map((item) => 
                <li key={item.card.info.id}> 
                    {item.card.info.name} - 
                    {" Rs. "} {item.card.info.price/100 || item.card.info.defaultPrice/100 }
                    <br/> 
                    {<b> DESCRIPTION - </b>} {item.card.info.description}
                </li> )}
            
            </ul>

        </div>
    )
}

export default RestaurantMenu ;