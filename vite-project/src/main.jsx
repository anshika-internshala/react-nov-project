import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Offers from "./Components/Offers.jsx";
import Help from "./Components/Help.jsx";
import SignIn from "./Components/SignIn.jsx";
import Body from "./Components/Body.jsx";
import Error from "./Components/Error.jsx";
import RealTimeClock from "./Components/RealTimeClock.jsx";
import { lazy, Suspense } from "react";

const Cart = lazy(() => import("./Components/Cart.jsx"));
const RestaurantDetails = lazy(() =>
  import("./Components/RestaurantDetails.jsx")
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense>
            <RestaurantDetails />
          </Suspense>
        ),
      },
      {
        path: "/clock",
        element: <RealTimeClock />,
      },

      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}></RouterProvider>
);
