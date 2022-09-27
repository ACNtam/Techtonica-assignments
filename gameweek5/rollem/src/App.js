import { useState, useEffect } from "react";
import Die from "./component/Die";
import "./App.css";

// Start with 2 dice
export default function App() {
  // state for die1
  const [die1, setDie1] = useState(1);
  // state for die2
  const [die2, setDie2] = useState(1);
  // another state for showing which die won?
  const [winner, setWinner] = useState();
  //another stae for rolling the dice, must ask question for boolean
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (die1 > die2) {
      setWinner("Player1 Wins");
    } else if (die1 === die2) {
      setWinner("Draw");
    } else {
      setWinner("Player2 Wins");
    }
  }, [die1, die2]);
  const play = () => {
    setDie1(getRandomNumber());
    setDie2(getRandomNumber());
  };

  // to avoid repetition
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  };

  return (
    <div className="App">
      {/**  button to roll and set the state of both dice.
      On the roll you would want to randomize a value for each die and set that state.
      Would also want to compare the values and alert() which die won.*/}
      <h1>Roll'Em</h1>
      <h2>{winner}</h2>
      <div className="btn">
        <button onClick={play}>Roll</button>
      </div>
      <div className="game-container">
        <p className="player">Player 1:</p>
        {/** Die component */}
        <Die side={die1} />
        <p className="player">Player 2:</p>
        {/** Die component */}
        <Die side={die2} />
      </div>
    </div>
  );
}
