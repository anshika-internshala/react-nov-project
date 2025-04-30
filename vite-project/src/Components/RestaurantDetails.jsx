import { useParams } from "react-router-dom";
import { useEffect } from "react";

function RestaurantDetails() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    )
      .then((response) => response.json())
      .then((data) =>
        console.log(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards
        )
      );
  });

  return (
    <>
      <h1>Restaurant Details</h1>
      <h1>Restaurant Id: {params.id}</h1>
    </>
  );
}

export default RestaurantDetails;
