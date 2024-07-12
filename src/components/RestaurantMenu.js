import {useState,  useEffect } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {
 const [resInfo , setResInfo] = useState(null);

useEffect(() => {
    fetchMenu();
} , [])

const fetchMenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4556795&lng=77.0631966&restaurantId=594820&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
} ;
if(resInfo === null) return <Shimmer /> ;

// cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
const  {name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info ;

    return(
        <div className="menu">
            {/* <h1> {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name} </h1>
            <h2> {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.description} </h2> */}
            <h2> {name}</h2>
            <h2> {cuisines.join(" , ")}    {costForTwoMessage} </h2>
            
            <ul>
                <li>burger</li>
                <li> rice </li>
                <li>coke  </li>
            </ul>

        </div>
    )
}

export default RestaurantMenu ;