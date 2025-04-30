import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Profile name="Internshala" />
      <ProfileClassBased name="React Class Based" /> */}
    </>
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
