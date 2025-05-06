import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Anshika",
  printName: function () {
    console.log("My name is Anshika");
  },
});

export default userContext;
