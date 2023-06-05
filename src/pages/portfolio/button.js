import React from "react";
import Data from "./projects";


const Buttons = ({ filterItem, setItem, btns }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
      <button
          className="btn-outline-primary btn" 
          onClick={() => setItem(Data)}
        >
          All
        </button>
        {btns.map((Val, id) => {
          return (
            <button
              className="btn-outline-primary btn"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;