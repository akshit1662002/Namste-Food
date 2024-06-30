import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * - logo
 * - nav bar
 * body
 * - search
 * - restaurant container
 *    - restaurant card
 *
 * footer
 * - copyright
 * - link
 * - address
 * - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props ;
  const { name , cuisines  , avgRating  , costForTwo  , cloudinaryImageId } = resData?.info
   return(
      <div className="res-card">

         <img 
         className="res-logo"
         alt="res-logo"
         src= { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
          +  cloudinaryImageId }
         />

         <h3> {name} </h3>
         <h4> {cuisines . join (" , ")} </h4>
         <h4> {avgRating} Star </h4>
         <h4> {costForTwo  }</h4>
         
         
        

      </div>
   )
}
const resList = [
  {
    "info": {
      "id": "534092",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "ky8j4nk1rqfqqlcp8r1c",
      "locality": "Prachin BalaJi Path",
      "areaName": "Budh Bazar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "4961",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-prachin-balaji-path-budh-bazar-moradabad-534092",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "562014",
      "name": "Manoj Sweets",
      "cloudinaryImageId": "u8bfqszesshzgk3dbgx4",
      "locality": "Gandhi Nagar",
      "areaName": "GANDHI NAGAR",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Sweets",
        "Fast Food",
        "Snacks",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "261103",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/manoj-sweets-gandhi-nagar-moradabad-562014",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "143548",
      "name": "Mohindra's Sweetschilly Restaurant",
      "cloudinaryImageId": "nfxjxvrymi40pwib3p54",
      "locality": "GMD Road",
      "areaName": "Pat Pat Sarai",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian",
        "Tandoor"
      ],
      "avgRating": 4.3,
      "parentId": "137860",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mohindras-sweetschilly-restaurant-gmd-road-pat-pat-sarai-moradabad-143548",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "406850",
      "name": "Maheshwari Dhaba",
      "cloudinaryImageId": "kztmcozunkoourctlna3",
      "locality": "Rampur Road",
      "areaName": "Station Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Tandoor"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "249997",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/maheshwari-dhaba-rampur-road-station-road-moradabad-406850",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "147161",
      "name": "Maheshwari Shudh Shakahari Bhojnalaya",
      "cloudinaryImageId": "bxfuj16ian6vkj89a3mu",
      "locality": "Rampur Road",
      "areaName": "Station Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Tandoor"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "130247",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 01:55:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/maheshwari-shudh-shakahari-bhojnalaya-rampur-road-station-road-moradabad-147161",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "313182",
      "name": "Grill's Yum Yum",
      "cloudinaryImageId": "cd8eg0j5im1qscnhmbpn",
      "locality": "Kothiwal Nagar",
      "areaName": "Budh Bazaar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "90884",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grills-yum-yum-kothiwal-nagar-budh-bazaar-moradabad-313182",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "437690",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "cloudinaryImageId": "odea6xb57ifjtddak4mi",
      "locality": "Gandhi Nagar",
      "areaName": "Prakash Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 01:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gandhi-nagar-prakash-nagar-moradabad-437690",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "223942",
      "name": "Grill's Yum Yum Mda",
      "cloudinaryImageId": "gadikgs3yffev0wf3ql7",
      "locality": "Ram Ganga Vihar 2",
      "areaName": "Statdium Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Tandoor"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "472024",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grills-yum-yum-mda-ram-ganga-vihar-2-statdium-road-moradabad-223942",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "651722",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_651722.JPG",
      "locality": "Moradabad",
      "areaName": "Kanth Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-kanth-road-moradabad-651722",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "583029",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "kqasm8apph1srxwhmsqg",
      "locality": "Bartan Bazaar",
      "areaName": "Lal Masjid Road",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "12175",
      "avgRatingString": "4.4",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-bartan-bazaar-lal-masjid-road-moradabad-583029",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "352757",
      "name": "Vadilal Ice Creams",
      "cloudinaryImageId": "edf6aa61ed4cdfcda130897c5b3e5255",
      "locality": "Prakash Nagar",
      "areaName": "Budh Bazar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "11745",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 20:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-prakash-nagar-budh-bazar-moradabad-352757",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "861659",
      "name": "Pastas By Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e6705d31-3941-4fb8-a198-fc6e24cdcc36_861659.JPG",
      "locality": "Buddhi Vihar",
      "areaName": "Budh Bazar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pastas"
      ],
      "avgRating": 4.1,
      "parentId": "306806",
      "avgRatingString": "4.1",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pastas-by-pizza-hut-buddhi-vihar-budh-bazar-moradabad-861659",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "361071",
      "name": "Pizza Paradise",
      "cloudinaryImageId": "mvgb5nv25njixone2lhz",
      "locality": "Prakash Nagar",
      "areaName": "Pili Kothi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "8997",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-paradise-prakash-nagar-pili-kothi-moradabad-361071",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "370976",
      "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
      "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
      "locality": "Kanth Road",
      "areaName": "Budh Bazar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream Cakes",
        "Desserts",
        "Ice Cream",
        "Bakery"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "21932",
      "avgRatingString": "4.1",
      "totalRatingsString": "7",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-kanth-road-budh-bazar-moradabad-370976",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "491092",
      "name": "Chinese Hub",
      "cloudinaryImageId": "rqmcjgq60agyraxecg0t",
      "locality": "Station Road",
      "areaName": "Budh Bazar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Pizzas",
        "Snacks"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "16394",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-hub-station-road-budh-bazar-moradabad-491092",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "321989",
      "name": "Pizza Point",
      "cloudinaryImageId": "dnpzfjm9pckfvv2yasfv",
      "locality": "Budh Bazar",
      "areaName": "Pili Kothi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Chinese"
      ],
      "avgRating": 3.7,
      "parentId": "21909",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-point-budh-bazar-pili-kothi-moradabad-321989",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "240170",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_240170.JPG",
      "locality": "Prachin BalaJi Path",
      "areaName": "Budh Bazar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-01 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-prachin-balaji-path-budh-bazar-moradabad-240170",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "420125",
      "name": "Moti Mahal Delux",
      "cloudinaryImageId": "vvlytcjla9qksjr5thl0",
      "locality": "Ashiyana",
      "areaName": "High Street",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Mughlai"
      ],
      "avgRating": 4.2,
      "parentId": "2113",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 5.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/moti-mahal-delux-ashiyana-high-street-moradabad-420125",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "181518",
      "name": "Veer Ji Malai Chaap Wale",
      "cloudinaryImageId": "nn57tpcs9hkwvywibiaw",
      "locality": "MIT Road",
      "areaName": "Ram ganga vihar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Tandoor"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "12056",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-30 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/veer-ji-malai-chaap-wale-mit-road-ram-ganga-vihar-moradabad-181518",
      "type": "WEBLINK"
    }
  }
]

//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '121603',
//       name: 'Kannur Food Point',
//       uuid: '51983905-e698-4e31-b0d7-e376eca56320',
//       city: '1',
//       area: 'Tavarekere',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
//       cuisines: ['Kerala', 'Chinese'],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       slaString: '24 MINS',
//       lastMileTravel: 3,
//       slugs: {
//         restaurant: 'kannur-food-point-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
//       locality: 'SG Palya',
//       parentId: 20974,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: '',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '121603',
//         deliveryTime: 24,
//         minDeliveryTime: 24,
//         maxDeliveryTime: 24,
//         lastMileTravel: 3,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '229',
//       name: 'Meghana Foods',
//       uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
//       cuisines: [
//         'Biryani',
//         'Andhra',
//         'South Indian',
//         'North Indian',
//         'Chinese',
//         'Seafood',
//       ],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 16,
//       minDeliveryTime: 16,
//       maxDeliveryTime: 16,
//       slaString: '16 MINS',
//       lastMileTravel: 1.399999976158142,
//       slugs: {
//         restaurant: 'meghana-foods-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore',
//       locality: '5th Block',
//       parentId: 635,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.3 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '229',
//         deliveryTime: 16,
//         minDeliveryTime: 16,
//         maxDeliveryTime: 16,
//         lastMileTravel: 1.399999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '428',
//       name: 'Biryani Pot',
//       uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
//       cuisines: ['North Indian', 'Biryani'],
//       tags: [],
//       costForTwo: 50000,
//       costForTwoString: '₹500 FOR TWO',
//       deliveryTime: 19,
//       minDeliveryTime: 19,
//       maxDeliveryTime: 19,
//       slaString: '19 MINS',
//       lastMileTravel: 1.899999976158142,
//       slugs: {
//         restaurant: 'biryani-pot-madiwala-junction-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68',
//       locality: 'Maruti Nagar',
//       parentId: 21798,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '20% off',
//         shortDescriptionList: [
//           {
//             meta: '20% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '20% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.8 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '428',
//         deliveryTime: 19,
//         minDeliveryTime: 19,
//         maxDeliveryTime: 19,
//         lastMileTravel: 1.899999976158142,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.9',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '223',
//       name: 'Truffles',
//       uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
//       cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
//       tags: [],
//       costForTwo: 45000,
//       costForTwoString: '₹450 FOR TWO',
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 30,
//       slaString: '30 MINS',
//       lastMileTravel: 1.600000023841858,
//       slugs: {
//         restaurant: 'truffles-ice-spice-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
//       locality: '5th Block',
//       parentId: 218065,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6275692~p=4~eid=00000187-2c1c-96f0-0062-eea300b00430',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.6 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '223',
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 30,
//         lastMileTravel: 1.600000023841858,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '425',
//       name: 'Hotel Empire',
//       uuid: 'c0c37758-2e83-4429-aad6-eb94debb48f5',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'un4omn7rcunkmlw6vikr',
//       cuisines: ['North Indian', 'Kebabs', 'Biryani'],
//       tags: [],
//       costForTwo: 45000,
//       costForTwoString: '₹450 FOR TWO',
//       deliveryTime: 23,
//       minDeliveryTime: 23,
//       maxDeliveryTime: 23,
//       slaString: '23 MINS',
//       lastMileTravel: 1.2999999523162842,
//       slugs: {
//         restaurant: 'hotel-empire-5th-block-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore',
//       locality: 'Koramangala',
//       parentId: 475,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '10% off',
//         shortDescriptionList: [
//           {
//             meta: '10% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '10% off up to ₹40 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '10% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '10% off up to ₹40 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '1.2 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '425',
//         deliveryTime: 23,
//         minDeliveryTime: 23,
//         maxDeliveryTime: 23,
//         lastMileTravel: 1.2999999523162842,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.1',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '201224',
//       name: 'Asha tiffins',
//       uuid: 'e32381cf-6468-4c10-9bad-47fa08e898a8',
//       city: '1',
//       area: 'HSR Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'n15vckntsiboiod3gpco',
//       cuisines: ['Indian', 'South Indian', 'Beverages'],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 26,
//       minDeliveryTime: 26,
//       maxDeliveryTime: 26,
//       slaString: '26 MINS',
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: 'asha-tiffins-hsr-hsr-2',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India',
//       locality: '7th Sector',
//       parentId: 236243,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '30% off',
//         shortDescriptionList: [
//           {
//             meta: '30% off | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '30% off upto ₹80 | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '30% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '30% off upto ₹80 | Use TRYNEW-XL',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6196512~p=7~eid=00000187-2c1c-96f0-0062-eea400b00725',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '201224',
//         deliveryTime: 26,
//         minDeliveryTime: 26,
//         maxDeliveryTime: 26,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.4',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '59593',
//       name: 'Al Daaz',
//       uuid: 'c189b92c-d842-4595-9a1f-ff85bd67bc2a',
//       city: '1',
//       area: 'Hsr Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'rxsvhvcdip9dbfdijzk9',
//       cuisines: [
//         'American',
//         'Arabian',
//         'Chinese',
//         'Desserts',
//         'Mughlai',
//         'North Indian',
//       ],
//       tags: [],
//       costForTwo: 40000,
//       costForTwoString: '₹400 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'al-daaz-hsr-hsr',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102',
//       locality: 'HSR',
//       parentId: 21640,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '59593',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.3',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '56589',
//       name: 'Roti-Wala',
//       uuid: '257a0889-b243-4252-b84a-6c9f1760d58f',
//       city: '1',
//       area: 'BTM Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'ptetuqkrhmpd8tiqiztg',
//       cuisines: [
//         'North Indian',
//         'Home Food',
//         'Thalis',
//         'Chinese',
//         'Punjabi',
//         'South Indian',
//         'Ice Cream',
//       ],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 37,
//       minDeliveryTime: 37,
//       maxDeliveryTime: 37,
//       slaString: '37 MINS',
//       lastMileTravel: 4,
//       slugs: {
//         restaurant: 'roti-wala-lavelle-road-central-bangalore',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address: '#239, 7TH Cross, Btm Stage 2. NS Palya, 560076',
//       locality: '2nd Stage',
//       parentId: 415860,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹100 | Use code GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹100 | Use code GUILTFREE',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '56589',
//         deliveryTime: 37,
//         minDeliveryTime: 37,
//         maxDeliveryTime: 37,
//         lastMileTravel: 4,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '560153',
//       name: 'Rice Bowl',
//       uuid: 'b5652b7d-5df8-4be5-8fe9-27648b668e79',
//       city: '1',
//       area: 'Koramangala',
//       totalRatingsString: '1000+ ratings',
//       cloudinaryImageId: 'z2ahvclpmdv6lekyth39',
//       cuisines: ['North Indian', 'South Indian'],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 22,
//       minDeliveryTime: 22,
//       maxDeliveryTime: 22,
//       slaString: '22 MINS',
//       lastMileTravel: 2.5,
//       slugs: {
//         restaurant: 'rice-bowl-koramangala-koramangala-2',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '42A, Old House List No 148/11, Katha No 296, BBMP PID No 68-327-98/1, Jakkasandra Village, Sarjapur Main Road, Bengaluru -, BTM Layout , B.B.M.P South, Karnataka - 560034',
//       locality: 'Jakkasandra',
//       parentId: 169302,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: 'FLAT125 off',
//         shortDescriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '₹125 OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: 'FLAT125 off | Use FLATDEAL',
//             discountType: 'Flat',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6081264~p=10~eid=00000187-2c1c-96f0-0062-eea500b00a3d',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '2.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '560153',
//         deliveryTime: 22,
//         minDeliveryTime: 22,
//         maxDeliveryTime: 22,
//         lastMileTravel: 2.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.1',
//       totalRatings: 1000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '337335',
//       name: 'Kannur food kitchen',
//       uuid: 'c70b61bc-0f68-4e24-996b-749fbf295c35',
//       city: '1',
//       area: 'BTM Layout',
//       totalRatingsString: '5000+ ratings',
//       cloudinaryImageId: 'a27weqanhnszqiuzsoik',
//       cuisines: ['Kerala', 'Biryani', 'Beverages'],
//       tags: [],
//       costForTwo: 20000,
//       costForTwoString: '₹200 FOR TWO',
//       deliveryTime: 24,
//       minDeliveryTime: 24,
//       maxDeliveryTime: 24,
//       slaString: '24 MINS',
//       lastMileTravel: 2.5,
//       slugs: {
//         restaurant: 'kannur-food-kitchen-btm-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India',
//       locality: '1st  Stage',
//       parentId: 114756,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: '',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off on all orders',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//           {
//             meta: 'Free Limejuice on orders above ₹499',
//             discountType: 'Freebie',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 2900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 2900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '2900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '2.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '337335',
//         deliveryTime: 24,
//         minDeliveryTime: 24,
//         maxDeliveryTime: 24,
//         lastMileTravel: 2.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.8',
//       totalRatings: 5000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '601',
//       name: 'Litti Twist',
//       uuid: 'e7dcc8d7-fea9-4312-8c4e-7a6516a026db',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'zyahkuhlgnxp3prkvttv',
//       cuisines: ['North Indian'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 28,
//       minDeliveryTime: 28,
//       maxDeliveryTime: 28,
//       slaString: '28 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'litti-twist-2nd-stage-btm',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
//       locality: '2nd Stage',
//       parentId: 3455,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6276197~p=13~eid=00000187-2c1c-96f0-0062-eea600b00d24',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '601',
//         deliveryTime: 28,
//         minDeliveryTime: 28,
//         maxDeliveryTime: 28,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '256957',
//       name: 'Shanmukha Restaurant',
//       uuid: 'c1972fbf-2e19-42d6-ac49-54f412f78d86',
//       city: '1',
//       area: 'Jayanagar',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'c5howge9hbdor7uqf949',
//       cuisines: [
//         'Biryani',
//         'Hyderabadi',
//         'Andhra',
//         'North Indian',
//         'South Indian',
//         'Chinese',
//         'Tandoor',
//         'Seafood',
//         'Beverages',
//       ],
//       tags: [],
//       costForTwo: 30000,
//       costForTwoString: '₹300 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 5,
//       slugs: {
//         restaurant: 'shanmukha-restaurant-jayanagar-jayanagar',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '1313, Near Bangalore Central Mall, 25th Main, 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India',
//       locality: '9th Block',
//       parentId: 9954,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '256957',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.1',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '642459',
//       name: 'Malnad Donne Biryani MDB',
//       uuid: '4ae022a0-9296-40ac-8ea9-3e764200e6a5',
//       city: '1',
//       area: 'Jayanagar',
//       totalRatingsString: '50+ ratings',
//       cloudinaryImageId: 'tjw67zgzfehxgfo1vio2',
//       cuisines: ['Biryani', 'South Indian', 'Kebabs'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 36,
//       minDeliveryTime: 36,
//       maxDeliveryTime: 36,
//       slaString: '36 MINS',
//       lastMileTravel: 5,
//       slugs: {
//         restaurant: 'malnad-donne-biryani-mdb-jayanagar-jayanagar',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '1384, 32nd E Cross , near Axis bank, opp sanjay gandhi university. 4th T Block , Jayanagar, Bengaluru, Karnataka 560041',
//       locality: 'T Block',
//       parentId: 130946,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '40% off',
//         shortDescriptionList: [
//           {
//             meta: '40% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '40% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '40% off up to ₹80 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 1,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '642459',
//         deliveryTime: 36,
//         minDeliveryTime: 36,
//         maxDeliveryTime: 36,
//         lastMileTravel: 5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'IT_IS_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '3.9',
//       totalRatings: 50,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '27643',
//       name: 'Ultimate Parathas',
//       uuid: '925340c8-7945-4cdf-894b-01a90f5445a2',
//       city: '1',
//       area: 'Btm Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'm0bjo1ds8l6o4civx6ek',
//       cuisines: ['Bihari', 'North Indian', 'Desserts'],
//       tags: [],
//       costForTwo: 25000,
//       costForTwoString: '₹250 FOR TWO',
//       deliveryTime: 29,
//       minDeliveryTime: 29,
//       maxDeliveryTime: 29,
//       slaString: '29 MINS',
//       lastMileTravel: 4.5,
//       slugs: {
//         restaurant: 'litti-twist-koramangala-koramangala',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         '#5, 6th cross, 1st Main, Bannerghatta Main Rd, NS Palya, Stage 2, Bengaluru, Karnataka 560076',
//       locality: '2nd Stage',
//       parentId: 21591,
//       unserviceable: false,
//       veg: false,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '50% off',
//         shortDescriptionList: [
//           {
//             meta: '50% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '50% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '50% off up to ₹100 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       ribbon: [
//         {
//           type: 'PROMOTED',
//         },
//       ],
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 3700,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 3700,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '3700',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: 'cid=6276390~p=16~eid=00000187-2c1c-96f0-0062-eea700b01075',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '4.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '27643',
//         deliveryTime: 29,
//         minDeliveryTime: 29,
//         maxDeliveryTime: 29,
//         lastMileTravel: 4.5,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: true,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
//   {
//     type: 'restaurant',
//     data: {
//       type: 'F',
//       id: '42294',
//       name: 'Udupi Palace',
//       uuid: '7e5fb1de-707b-4851-a0f7-a70df335efe2',
//       city: '1',
//       area: 'HSR Layout',
//       totalRatingsString: '10000+ ratings',
//       cloudinaryImageId: 'dbfp4mqtidbjh9sectlk',
//       cuisines: [
//         'Beverages',
//         'Biryani',
//         'Chinese',
//         'Desserts',
//         'North Indian',
//         'South Indian',
//       ],
//       tags: [],
//       costForTwo: 15000,
//       costForTwoString: '₹150 FOR TWO',
//       deliveryTime: 30,
//       minDeliveryTime: 30,
//       maxDeliveryTime: 30,
//       slaString: '30 MINS',
//       lastMileTravel: 5.599999904632568,
//       slugs: {
//         restaurant: 'udupi-palace-00-hsr',
//         city: 'bangalore',
//       },
//       cityState: '1',
//       address:
//         'No 1188 HNR tower 24th main second SECTOR HSR LAYOUT BANGALORE 560102',
//       locality: '2nd Sector',
//       parentId: 6971,
//       unserviceable: false,
//       veg: true,
//       select: false,
//       favorite: false,
//       tradeCampaignHeaders: [],
//       aggregatedDiscountInfo: {
//         header: '20% off',
//         shortDescriptionList: [
//           {
//             meta: '20% off | Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       aggregatedDiscountInfoV2: {
//         header: '20% OFF',
//         shortDescriptionList: [
//           {
//             meta: 'Use TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         descriptionList: [
//           {
//             meta: '20% off up to ₹50 | Use code TRYNEW',
//             discountType: 'Percentage',
//             operationType: 'RESTAURANT',
//           },
//         ],
//         subHeader: '',
//         headerType: 0,
//         superFreedel: '',
//       },
//       chain: [],
//       feeDetails: {
//         fees: [
//           {
//             name: 'distance',
//             fee: 4900,
//             message: '',
//           },
//           {
//             name: 'time',
//             fee: 0,
//             message: '',
//           },
//           {
//             name: 'special',
//             fee: 0,
//             message: '',
//           },
//         ],
//         totalFees: 4900,
//         message: '',
//         title: 'Delivery Charge',
//         amount: '4900',
//         icon: '',
//       },
//       availability: {
//         opened: true,
//         nextOpenMessage: '',
//         nextCloseMessage: '',
//       },
//       longDistanceEnabled: 0,
//       rainMode: 'NONE',
//       thirdPartyAddress: false,
//       thirdPartyVendor: '',
//       adTrackingID: '',
//       badges: {
//         imageBased: [],
//         textBased: [],
//         textExtendedBadges: [],
//       },
//       lastMileTravelString: '5.5 kms',
//       hasSurge: false,
//       sla: {
//         restaurantId: '42294',
//         deliveryTime: 30,
//         minDeliveryTime: 30,
//         maxDeliveryTime: 30,
//         lastMileTravel: 5.599999904632568,
//         lastMileDistance: 0,
//         serviceability: 'SERVICEABLE',
//         rainMode: 'NONE',
//         longDistance: 'NOT_LONG_DISTANCE',
//         preferentialService: false,
//         iconType: 'EMPTY',
//       },
//       promoted: false,
//       avgRating: '4.2',
//       totalRatings: 10000,
//       new: false,
//     },
//     subtype: 'basic',
//   },
// ];




const Body = () =>{
   return(
      <div className="body">
         <div className="search"> search </div>
         <div className="res-container"> 
         {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
         ) )}
         
       
         </div>

      </div>
      
   )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
