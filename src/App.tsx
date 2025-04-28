// import React from "react";
import Navigation from "./Components/Navigation";
import CapitalLand from "./Components/CapitalLand";
import Central from "./Components/Central";
import East from "./Components/East";
import North from "./Components/North";
import NorthEast from "./Components/NorthEast";
import NorthWest from "./Components/NorthWest";
import South from "./Components/South";
import West from "./Components/West";


const App = () => {
  return (
    <>
      <Navigation />
      <CapitalLand />
      <NorthEast/>
      <NorthWest/>
      <South/>
      <West/>
      <North/>
      <East />
      <Central />
    </>
  );
};

export default App;
