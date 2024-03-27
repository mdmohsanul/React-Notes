import React from "react";
import File1 from "./File1";
import UseRefHook from "./UseRefHook";

const Optimization = () => {
  return (
    <>
      <File1 />
      <UseRefHook />
    </>
  );
};

export default Optimization;

/* 
-- Lazy loading
-- Memoization -- by using useMemo Hook
-- By cleanUp eventListeners
-- Render List in chunks -- If we have 1000 of list of data coming from api, so we will not render our list once bcoz it takes 
                            so much time
                            React Library for doing this (react virtualized)

-- Don't install unnecessary library or packages bcoz it makes our bundle size large
*/

/* ---------Best Practices ---------------------- 
 
-- Correctly mutating states
-- Maximizing the potential of useEffect
-- Using Ternary Operators -- Instead use logical operators
-- Multiple components in single file -- make a component on principle of(Single responsibility principle)
-- Prop Drilling
 
*/
