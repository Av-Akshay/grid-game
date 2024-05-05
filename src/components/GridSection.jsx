import React from "react";
import useGame from "../hooks/useGame";

const GridSection = () => {
  let boxesArray = [];
  for (let index = 1; index <= 100; index++) {
    boxesArray.push(index);
  }

  const { inputHandler } = useGame();

  return (
    <div className="grid grid-cols-10 grid-rows-10 w-4/5 mx-auto my-5 z-10 cursor-pointer">
      {boxesArray.map((item) => {
        return (
          <div
            key={item}
            className="h-16 w-full border border-white flex items-center justify-center"
            onClick={(e) => {
              inputHandler(e, item);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default GridSection;
