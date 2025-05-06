import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const userData = useContext(userContext);

  console.log("Body Component");

  // Make API call to fetch list of restaurants

  // useEffect code runs after the component is rendered
  useEffect(() => {
    console.log("useEffect Hook Called");
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6909835&lng=77.44527719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setAllRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setFilteredRestaurants(
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      });
  }, []);

  function filterTopRatedRestaurants() {
    setIsClicked(true);

    const topRatedRestaurants = allRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );

    console.log(topRatedRestaurants);

    setFilteredRestaurants(topRatedRestaurants);
  }
  function resetRatingFilter() {
    setFilteredRestaurants(allRestaurants);
    setIsClicked(false);
  }

  function setSearchRestaurants(searchRestaurants) {
    setFilteredRestaurants(searchRestaurants);
  }

  return (
    <>
      {console.log("Body Component JSX Rendered")}
      <h1 className="font-bold text-xl m-8">
        Restaurants with Online Food Delivery
      </h1>
      <button
        className={
          isClicked
            ? "bg-amber-100 border rounded w-1/12 ml-20"
            : "border rounded w-1/12 ml-20"
        }
        onClick={filterTopRatedRestaurants}
      >
        Ratings 4.5+
      </button>
      <button className="border m-4 px-4" onClick={resetRatingFilter}>
        Reset Rating
      </button>
      <Search
        allRestaurants={allRestaurants}
        searchFunction={setSearchRestaurants}
      />
      <input
        type="text"
        className="border mx-2"
        onChange={(e) => userData.setUserName(e.target.value)}
      ></input>
      <div className="flex flex-wrap w-9/12 m-auto">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard resDetails={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
