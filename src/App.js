import React from 'react';
import './App.css';
import MainDeck from './components/MainDeck';

function App() {
  return (
    <div className="DeckOfCards">
      <div className="DeckOfCards-body">
        <h1 className='title'>A "Deck of cards" project ♣ <span style={{color:'red'}}>♦</span> ♠ <span style={{color:'red'}}>♥</span></h1>
        <MainDeck />
      </div>
    </div>
  );
}

export default App;
