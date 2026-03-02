import Player from './components/Player';
import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Log from './components/Log';


function App() {
const [activePlayer, setActivePlayer] = useState("X");
const [gameTurns, setGameTurns] = useState([]);

function handleSelectSquare(rowIndex,cellIndex) {
  console.log(rowIndex,cellIndex);
  setActivePlayer(curActivePlayer => curActivePlayer === "X" ? "O" : "X");
  setGameTurns(prevTurns => {
    let currentPlayer = "X";
    if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      currentPlayer = "O";
    }

    const updatedTurns = 
    [{square: {row : rowIndex, cell : cellIndex}, player: currentPlayer}, ...prevTurns]
    console.log(updatedTurns);
    
    return updatedTurns;
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player initialName="Player 1" isActive={activePlayer === "X"} />
          </li>
          <li>
            <Player initialName="Player 2" isActive={activePlayer === "O"} />
          </li>
        </ol>
        <GameBoard handleSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main >
  )
}

export default App
