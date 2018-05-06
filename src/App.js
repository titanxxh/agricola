import React from 'react';
import './App.css';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';

import { Client } from 'boardgame.io/react';
import { Agricola } from './game';
import { MainBoard } from './board/mainBoard';

const AgricolaClient = Client({
  game: Agricola,
  board: MainBoard,
  numPlayers: 4,
  enhancer: applyMiddleware(logger)
  //multiplayer: { server: 'localhost:8000' },
});

// const App = () => (
//     <div>
//         <AgricolaClient playerID="0" />
//     </div>
// );

const App = () => (
  <div>
    <AgricolaClient />
  </div>
);

export default App;
