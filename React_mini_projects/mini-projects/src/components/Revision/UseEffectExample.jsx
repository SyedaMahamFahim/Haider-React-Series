import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [counter, setCounter] = useState(0);


  const increases = () => {
    setCounter(counter + 1);
  };

// Condition
//   useEffect(()=>{
//     console.log("I run everytime when my condition is changed")
    
//   },[counter])

 
//onMount
//   useEffect(() => {
//       console.log("I Only run once (When the component gets mounted)")
//   }, []);


// Every rerender
  useEffect(() => {
      console.log("I run everytime this component rerenders")
  });











  // onMount
  // useEffect(() => {
  //     console.log("I Only run once (When the component gets mounted)")
  // }, []);

  // // Condition based
  // useEffect(() => {
  //     console.log("I run everytime my condition is changed")
  // }, [counter]);

  return (
    <>
      {counter}

      <button onClick={increases}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </>
  );
};

export default UseEffectExample;
