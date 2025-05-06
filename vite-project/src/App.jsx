import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { useState } from "react";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  const [userName, setUserName] = useState("LEARNING CONTEXT");
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
      {/* <Profile name="Internshala" />
      <ProfileClassBased name="React Class Based" /> */}
    </Provider>
  );
}

export default App;

// Default Export and Default Import

// Named Export and Named Import

// Header Component
// Body Component
// Filter Component
// Restaurant Card Component
// Footer Component
