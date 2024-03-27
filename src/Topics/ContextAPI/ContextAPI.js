import React from "react";
import Parent from "./Parent";

const ContextAPI = () => {
  return (
    <>
      <Parent />
    </>
  );
};

export default ContextAPI;

/* 
If we have to pass some data from parent to grandchild , we can't directly pass to it instead we first pass to child then child
will pass that data to grandchild and child is nothing to do with that data just passing that data.
And in a situation in complex application if we want a sort data in different places it makes our app complex if we are passing
by props

So here state management comes in picture like
-- context API
-- Redux
-- Zustand
-- Recoil

*/
