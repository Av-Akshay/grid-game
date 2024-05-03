import React from "react";
import { GridSection } from "./components/index";
import { useSelector } from "react-redux";
import useGame from "./hooks/useGame";
import ImageOne from "../src/assests/one.jpg";
import ImageTwo from "../src/assests/two.webp";

function App() {
  const { playerOneRandomCards, playerTwoRandomCards } = useSelector(
    (store) => store.gameReducer
  );
  const { playGame, startGame } = useGame();

  if (!startGame) {
    return (
      <>
        <div className="h-screen flex items-center justify-center bg-slate-800 text-white relative overflow-hidden">
          <img
            className=" absolute -top-1/2 -right-1/3 z-[0] w-4/5"
            src={ImageOne}
            alt="backgroundOne"
          />

          <div className=" text-center z-10">
            <p className="text-3xl font-semibold capitalize animate-bounce h-10 ">
              click the start button to start the game
            </p>
            <button
              className=" font-semibold text-xl px-5 py-2 border-2 border-green-500 text-green-500 rounded-lg mt-5"
              onClick={() => {
                playGame();
              }}
            >
              {" "}
              Start{" "}
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" flex flex-col gap-2 py-5 bg-slate-800 text-white">
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
}

export default App;
