import React, { useState } from "react";
import Cars from "./components/Cars";
import "./root.css";
import AllCars from "./StaticData/AllCars";

function App() {
  const [randomCar, setRandomCar] = useState(AllCars[0]);

  const handleClick = () => {
   const randomNumber= Math.floor(Math.random()*AllCars.length)
    setRandomCar(AllCars[randomNumber])
  };

  return (
    <>
     
    
      <Cars details={randomCar}/>
      <button onClick={handleClick}>Generate New Image</button>
    </>
  );
}

export default App;
