import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ text }) => {
  return (
    <>
      <GrandChild text={text} />
    </>
  );
};

export default Child;
