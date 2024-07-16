import RestaurantCard  , {withVegLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState , useEffect  , useContext} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Body = () =>{
const [listOfRestaurants , setListOfRestaurant ] = useState([])
const [filteredRestaurant , setFilteredRestaurant] = useState([])

const RestaurantCardVeg = withVegLabel(RestaurantCard);



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

   // optional chaining 
   setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false ) return <h1> check your internet connection </h1>;

const { loggedInUser, setUserName } = useContext(UserContext);



// ternary operator  ? 
    return listOfRestaurants.length ===  0 ? <Shimmer/> :  (
       <div className="body">
          <div className="filter flex">
            <div className="search p-4 m-4 ">
               <input type="text" className=" border border-solid border-black " 
               value={searchText} 
               onChange = {(e) => {
                  setSearchText(e.target.value)
                  }} />
               <button className=" px-4 py-2 bg-green-200 m-4 rounded-lg "
               onClick={() => {
                  // filter the restaurant card and update the ui 
                  // earch text 
                  const searchedList =  listOfRestaurants.filter((res) => 
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                   );
                  setFilteredRestaurant(searchedList);

               }} > Search </button>
            </div>
            <div className=" p-4 m-4 flex items-center " >
            <button className="px-4 py-2  bg-gray-200  rounded-lg " 
            // filter logic here 
            onClick={() => {
               const filterList = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4
               );
               
               setFilteredRestaurant(filterList);
            }}>
            Top rated restaurant 
            </button>
            <div className="search m-4 p-4 flex items-center">
          <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
               
            </div>
           
            </div>

          <div className=" flex flex-wrap "> 
          {filteredRestaurant.map((restaurant) => (
           <Link  key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id }>
            {restaurant.info.veg ? <RestaurantCardVeg  resData = {restaurant} /> :  <RestaurantCard  resData = {restaurant}/> }
            </Link>
          ) )}
          
        
          </div>
 
       </div>
       
    )
 }

 export default Body ;