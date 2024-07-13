import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
const [listOfRestaurants , setListOfRestaurant ] = useState([])
const [filteredRestaurant , setFilteredRestaurant] = useState([])

const [searchText , setSearchText ] = useState("");

useEffect(() => {
   fetchData();
},  []);

// function logic to fecth data 
const fetchData = async () => {
   const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8386481&lng=78.7733286&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

   const json = await data.json(); // convert data into json 

   console.log(json);

   // optional chaining 
   setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
   setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false ) return <h1> check your internet connection </h1>;


// ternary operator  ? 
    return listOfRestaurants.length ===  0 ? <Shimmer/> :  (
       <div className="body">
          <div className="filter">
            <div className="search">
               <input type="text" className="search-box" 
               value={searchText} 
               onChange = {(e) => {
                  setSearchText(e.target.value)
                  }} />
               <button onClick={() => {
                  // filter the restaurant card and update the ui 
                  // earch text 
                  const searchedList =  listOfRestaurants.filter((res) => 
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                  setFilteredRestaurant(searchedList);

               }} > Search </button>
            </div>
            <button className="filter-btn" 
            // filter logic here 
            onClick={() => {
               const filterList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
               );
               console.log(filterList);
               setFilteredRestaurant(filterList);
            }}>
            Top rated restaurant 
            </button>
            </div>

          <div className="res-container"> 
          {filteredRestaurant.map((restaurant) => (
           <Link  key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id }><RestaurantCard  resData = {restaurant}/></Link>
          ) )}
          
        
          </div>
 
       </div>
       
    )
 }

 export default Body ;