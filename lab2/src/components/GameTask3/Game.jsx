import React, { useEffect, useState } from "react";

import { Button, dark } from "grommet";
import { TextInput } from "grommet";

const Game = () => {
  const [game, setGame] = useState({ isPlaying: false, randomNumber: 0 });
  const [playerInput, setPlayerInput] = useState();
  const [result, setResult] = useState({
    attemptsCount: 10,
    attempt: "",
    isWin: false,
  });

  useEffect(() => {
    if (result.attemptsCount === 0 && !result.isWin) {
      setGame({ isPlaying: false });
      setResult({
        attemptsCount: 10,
        attempt: "",
        isWin: false,
      });
    }
  }, [result.attemptsCount, result.isWin]);

  const startNewGame = () => {
    setGame({
      isPlaying: true,
      randomNumber: Math.floor(Math.random() * 1000),
    });
  };

  const checkResult = () => {
    if (game.randomNumber > playerInput) {
      setResult({
        attemptsCount: result.attemptsCount - 1,
        attempt: `Ваше число невірно. Воно менше ніж N`,
      });
    } else if (game.randomNumber < playerInput) {
      setResult({
        attemptsCount: result.attemptsCount - 1,
        attempt: `Ваше число невірно. Воно більше ніж N`,
      });
    } else {
      setResult({
        attempt: `Ваше число вірнe! Загадане число - ${game.randomNumber}`,
        isWin: true,
      });
    }
  };

  return (
    <div>
      <Button
        disabled={game.isPlaying}
        style={{ margin: 10 }}
        label="New Game"
        onClick={startNewGame}
      />
      <TextInput
        style={{ margin: 10, width: 300 }}
        type="number"
        onChange={(e) => setPlayerInput(e.target.value)}
      />
      <Button
        disabled={!game.isPlaying}
        color={dark}
        style={{ margin: 10 }}
        label="Check"
        onClick={checkResult}
      />
      {game.isPlaying && (
        <div>
          <p>Attempts: {result.attemptsCount}</p>
          <p>Result: {result.attempt}</p>
          {result.isWin && <p style={{ color: "green" }}>Good Job!</p>}
          {result.attemptsCount === 0 && !result.isWin && (
            <p style={{ color: "red" }}>Game over!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
