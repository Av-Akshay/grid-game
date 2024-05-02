import React from "react";
import { GridSection } from "./components/index";
import { useSelector } from "react-redux";

function App() {
  const { playerOneRandomCards, playerTwoRandomCards } = useSelector(
    (store) => store.gameReducer
  );

  return (
    <>
      <div className=" flex flex-col gap-5 py-5">
        <div className=" flex items-center justify-between w-4/5 m-auto">
          <div>
            <h1> Player1 have {playerOneRandomCards.length} cards in hand</h1>
            <div className="flex items-center gap-2">
              {playerOneRandomCards.map((item, index) => {
                return <p key={index}> {item}, </p>;
              })}
            </div>
          </div>
          <div>
            <h1> Player2 have {playerTwoRandomCards.length} cards in hand</h1>
            <div className="flex items-center gap-2">
              {playerTwoRandomCards.map((item, index) => {
                return <p key={index}> {item}, </p>;
              })}
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            {/* {user % 2 ? "Player1" : "Player2 "} */}
          </h1>
        </div>
        <GridSection />
      </div>
    </>
  );
}

export default App;
