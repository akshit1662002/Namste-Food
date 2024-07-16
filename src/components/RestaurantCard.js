import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";


const RestaurantCard = (props) => {

   const {loggedInUser} = useContext(UserContext)

    const { resData } = props ;
    const { cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName, sla } = resData?.info
     return(
        <div className=" m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300 ">
  
           <img 
           className="rounded-lg"
           alt="res-logo"
           src= { CDN_URL
            +  cloudinaryImageId }/>
           <h3 className="font-bold py-4 text-lg"> {name} </h3>
           <h4> {cuisines . join (" , ")} </h4>
           <h4> {avgRating} Star </h4>
           <h4> {costForTwo  }</h4>
           <h4> {areaName } </h4>
           <h4> {sla?.slaString} </h4>
           <h4 className="px-4 font-bold"> {loggedInUser} </h4>

         </div>
     )
  }

  // higher order component 
  // imput - RestaurantCard ==> RestaurantCardPromoted

  export const withVegLabel = (RestaurantCard) =>{
   return (props) => {
      return(
         <div>
            <label className=" absolute bg-green-600 text-white m-2 p-2 rounded-lg ">
               Veg 
            </label>
            <RestaurantCard {... props} />
         </div>
      )
   }
  }

  export default RestaurantCard ;