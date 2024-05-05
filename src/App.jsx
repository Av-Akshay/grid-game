import React from "react";
import { GridSection } from "./components/index";
import { useSelector } from "react-redux";
import useGame from "./hooks/useGame";
import ImageOne from "../src/assests/one.jpg";
import ImageTwo from "../src/assests/two.webp";

function App() {
  const {
    playerOneRandomCards,
    playerTwoRandomCards,
    isPlayerWin,
    winnerPlayer,
  } = useSelector((store) => store.gameReducer);
  const { playGame, startGame, handelResetValues } = useGame();

  return !startGame ? (
    <div className="h-screen flex items-center justify-center bg-slate-800 text-white relative overflow-hidden after:bg-[rgba(0,0,0,0.7)] after:absolute after:w-full after:h-full ">
      <img
        className=" absolute -top-1/2 -right-1/3 z-[0] w-4/5 rounded-3xl"
        src={ImageOne}
        alt="backgroundOne"
      />

      <div className=" text-center z-10">
        <p className="text-3xl text-green-500 font-semibold capitalize animate-bounce h-10 ">
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
      <img
        className=" absolute z-[0] w-4/5 -left-1/3 -bottom-[31%] rounded-3xl"
        src={ImageTwo}
        alt="backgroundOne"
      />
    </div>
  ) : isPlayerWin ? (
    <div className="h-screen bg-[rgba(0,0,0,0.6)] w-full flex items-center justify-center ">
      <div className="w-3/5 h-4/5 bg-white grid place-content-center rounded-2xl ">
        <div className="flex items-center flex-col gap-5">
          <p className="font-semibold text-3xl capitalize">
            {" "}
            {winnerPlayer} won the game
          </p>
          <button
            onClick={() => {
              handelResetValues();
            }}
            className=" text-green-500 border-2 w-fit border-green-500 px-5 py-2 rounded-xl font-semibold text-2xl hover:bg-green-500 hover:text-white transition-all"
          >
            Restart the game
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        backgroundImage: `url("https://st2.depositphotos.com/2066835/8826/v/950/depositphotos_88263406-stock-illustration-hand-drawn-tic-tac-toe.jpg")`,
      }}
      className="z-0 flex flex-col gap-2 py-5 bg-slate-800 text-white relative  after:bg-[rgba(0,0,0,0.9)] after:z-[1] after:absolute after:w-full after:h-full after:top-0"
    >
      <div className=" flex items-center justify-between w-4/5 m-auto z-10">
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
      <GridSection />
    </div>
  );
}

export default App;
