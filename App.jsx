import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }
  const hold = (id) => {
    setDice((prev) =>
      prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    );
  };
  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      isHeld={dieObj.isHeld}
      value={dieObj.value}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      <h2>Tenzies</h2>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}
