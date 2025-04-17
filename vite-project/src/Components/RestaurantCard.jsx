function RestaurantCard(props) {
  return (
    <div className="m-8">
      <img
        src={props.resDetails.image}
        alt=""
        className="w-70 h-48 rounded-2xl"
      />
      <h1 className="font-bold">{props.resDetails.name}</h1>
      <span className="font-bold">{props.resDetails.rating}</span>
      <span> {props.resDetails.deliveryTime}</span>
      <p> {props.resDetails.cuisines}</p>
    </div>
  );
}

export default RestaurantCard;
