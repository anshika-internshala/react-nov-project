import { FaSearch } from "react-icons/fa";
import { LuCirclePercent } from "react-icons/lu";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

function Header() {
  const isOnline = useOnlineStatus();
  const userData = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("userData", userData);
  return (
    <nav className="flex justify-around items-center border">
      <img
        src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        alt=""
        width="70px"
        height="70px"
      />
      <ul className="flex">
        <li>{userData.loggedInUser}</li>
        <li>{isOnline ? "🟢 " : "🔴 "} </li>
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <FaSearch className="mt-1" />
        <li className="mx-6">Search</li>
        <LuCirclePercent className="mt-1" />
        <li className="mx-4">
          <Link to="/offers">Offers</Link>
        </li>
        <IoHelpBuoyOutline className="mt-1" />
        <li className="mx-4">
          <Link to="/help">Help</Link>
        </li>
        <IoPersonOutline className="mt-1" />
        <li className="mx-4">
          <Link to="/signIn">SignIn</Link>
        </li>
        <FaShoppingCart className="mt-1" />
        <li className="ml-4">Cart</li>
        <li> {cartItems.length}</li>
      </ul>
    </nav>
  );
}

export default Header;
