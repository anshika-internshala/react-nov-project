import userContext from "../utils/userContext";
import { useContext } from "react";

function RestaurantCard(props) {
  const userData = useContext(userContext);
  return (
    <div className="m-8">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.resDetails.cloudinaryImageId}`}
        alt=""
        className="w-70 h-48 rounded-2xl"
      />
      <h1 className="font-bold">{props.resDetails.name}</h1>
      <span className="font-bold">{props.resDetails.avgRating}</span>
      <span> {props.resDetails.sla.slaString}</span>
      <p> {props.resDetails.cuisines}</p>
      <p>{userData.loggedInUser}</p>
    </div>
  );
}

export default RestaurantCard;
