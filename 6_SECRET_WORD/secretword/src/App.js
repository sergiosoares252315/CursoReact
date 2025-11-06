// CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from 'react';
// Data
import { wordsList } from './data/words';
// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessesdLetters, setGuessesdLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return { word, category };
  }, [words]);
  
  // starts the secret word game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // fill states
    setpickedWord(word);
    setpickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (guessesdLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter))
    {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter))
    {
      setGuessesdLetters((actualGuessesLetters) => [
        ...actualGuessesLetters,
        normalizedLetter
      ]);
    }
    else
    {
      setWrongLetters((actualWorngLetters) => [
        ...actualWorngLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessesdLetters([]);
    setWrongLetters([]);
  }
  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // Reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]

    // win condition
    if (guessesdLetters.length === uniqueLetters.length)
    {
      //add score
      setScore((actualScore) => actualScore + 100);

      // restart game with new word
      startGame();

    }

    console.log(uniqueLetters);

  }, [guessesdLetters, letters, startGame])

  // restarts the game 
  function retry() {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" &&
        <Game verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessesdLetters={guessesdLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
