import React, { useState } from "react";

const Styles = () => {
  const [copybutton, setcopybutton] = useState("Copy");
  return (
    <>
      <button
        className="text-2xl  text-white py-1 px-3 rounded-r-lg"
        //className = button (it is coming from style.css file)
        style={{ background: copybutton === "Copy" ? "blue" : "red" }}
      >
        {copybutton}
      </button>
    </>
  );
};

export default Styles;

/* 
In this component we learn about how we style component different ways and in conditions


*/
