import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function App() {
  /**
   * Challenge: Create a `Roll Dice` button that will re-roll
   * all 10 dice
   *
   * Clicking the button should generate a new array of numbers
   * and set the `dice` state to that new array (thus re-rendering
   * the array to the page)
   */

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  const diceElements = dice.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}
