import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removePlayerOneCard,
  removePlayerTwoCard,
  addPlayerOneRandomCards,
  addPlayerTwoRandomCards,
  removePlayerOneRandomCards,
  removePlayerTwoRandomCards,
  addValueOnGridArray,
} from "../store/slice";

const useGame = () => {
  let [user, setUser] = useState(1);
  let [ startGame,setStartGame ] = useState(false);
  const dispatch = useDispatch();

  const {
    playerOneCards,
    playerTwoCards,
    playerOneRandomCards,
    playerTwoRandomCards,
    gridArray,
  } = useSelector((store) => store.gameReducer);


  let playerOneTotalCards = playerOneCards.length - 1;
  let playerTwoTotalCards = playerTwoCards.length - 1;

  let generateRandomFiveCards = () => {
    for (let index = 1; index <= 5; index++) {
      // generate random number cards from 52 cards
      let playerOneRandomCardIndex =
        Math.floor(Math.random() * (playerOneTotalCards - 0 + 1)) + 0;
      let playerTwoRandomCardIndex =
        Math.floor(Math.random() * (playerTwoTotalCards - 0 + 1)) + 0;

      //pushing 5 random cards on both players array
      dispatch(
        addPlayerOneRandomCards(playerOneCards[playerOneRandomCardIndex])
      );
      dispatch(
        addPlayerTwoRandomCards(playerTwoCards[playerTwoRandomCardIndex])
      );

      // removing that five cards which once exclude from 52 cards;

      dispatch(removePlayerOneCard(playerOneRandomCardIndex));
      dispatch(removePlayerTwoCard(playerTwoRandomCardIndex));
    }
  };
  console.log(gridArray);
  const checkWinner = () => {

  // horizontal Checking
    let playerOneHorizontalSequence = 1;
    let playerTwoHorizontalSequence = 1;

    // for (let index = 0; index < gridArray.length-1; index++) {
    //       for (let j = 0; j < gridArray[index].length-1; j++) {
    //         if(gridArray[index][j] === "one"){
    //           if(gridArray[index][j]=== gridArray[index][j+1]){
    //             playerOneSequence++;
    //           }
    //         }
    //         if(gridArray[index][j] === "two"){
    //           if(gridArray[index][j]=== gridArray[index][j+1]){
    //             playerTwoSequence++;
    //             console.log(playerTwoSequence);
    //           }
    //         }
    //       }
    // }

// vertical Checking
       for (let col = 0; col < gridArray.length; col++) {
        for (let row = 0; row < gridArray.length; row++) {
          if(gridArray[row][col]==="one"){
            if(gridArray[row][col] === gridArray[row+1][col]){
              playerOneSequence++;
            }
          }
          if(gridArray[row][col]==="two"){
            if(gridArray[row][col] === gridArray[row+1][col]){
              playerTwoSequence++;
            }
          }
        }
        
       }

    if(playerOneSequence >= 5){
        alert('find a wining condition')
    }

  };

  const inputHandler = (e, item) => {
    let row = item % 10 === 0 ? item / 10 : Math.floor(item / 10) + 1;
    let col = item % 10 === 0 ? 10 : item % 10;
    let player = user % 2 === 1 ? "one" : "two";
    dispatch(addValueOnGridArray({ row, col, player }));
   
    if (user % 2 === 1) {
      if (playerOneRandomCards.length > 0) {
        e.target.innerHTML = `p1=>${playerOneRandomCards[0]}`;
        dispatch(removePlayerOneRandomCards(0));
        setUser(user + 1);
      }
    }
    if (user % 2 === 0) {
      if (playerTwoRandomCards.length > 0) {
        e.target.innerHTML = `p2=>${playerTwoRandomCards[0]}`;
        dispatch(removePlayerTwoRandomCards(0));
        setUser((preVal) => preVal + 1);
      }
    }
    if (
      playerOneRandomCards.length === 0 &&
      playerTwoRandomCards.length === 1
    ) {
      generateRandomFiveCards();
    }

    checkWinner();
  };

  const player = user % 2 ? "player1" : "player2";

const playGame = ()=>{
  generateRandomFiveCards();
  setStartGame(true)
}

  return {
    inputHandler,
    player,
    startGame,
    playGame
  };
};

export default useGame;
