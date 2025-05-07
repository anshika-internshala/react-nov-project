import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

function RestaurantDetails() {
  const params = useParams();
  const [menuItems, setMenuItems] = useState([]);
  console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6909835&lng=77.44527719999999&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(
        //   data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        //     ?.card?.card?.itemCards
        // );

        setMenuItems(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards
        );
      });
  }, []);

  function handleAddItem(item) {
    dispatch(addItem(item));
  }

  return (
    <>
      {menuItems.map((res) => {
        return (
          <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4 my-4">
            <div className="flex flex-col w-3/4">
              <h1>{res.card.info.name}</h1>
              <h1>{res.card.info.price / 100}</h1>
              <h1>{res.card.info.description}</h1>
            </div>
            <img
              className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${res.card.info.imageId}`}
              alt=""
            />

            <button
              className="border bg-green-300 h-8 relative top-16 right-5 w-[20%]"
              onClick={() => handleAddItem(res)}
            >
              Add +
            </button>
            <span>{res.quantity}</span>
          </div>
        );
      })}
    </>
  );
}

export default RestaurantDetails;
