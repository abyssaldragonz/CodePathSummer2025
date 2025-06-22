import './App.css';
import Card from './components/Card'
import cardInfo from './assets/cards.json'
import React, {useState} from 'react'

export default function App() {
  const [cardState, setCardState] = useState(0)
  const [userStreak, setStreak] = useState(0)
  
  function prevCard() {
    setCardState(cardState-1)
  }

  function nextCard() {
    setCardState(cardState+1)
  }

  function shuffle() {
    for (var i = cardInfo.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardInfo[i];
      cardInfo[i] = cardInfo[j];
      cardInfo[j] = temp;
    }
    setCardState(0)
  }

  return (
    <div className="App">
    	<h1>Creature Flashcards</h1>
      <h2>Think you know your creatures? Test your creature knowledge!</h2>
      <div style={{backgroundColor:'#9ec9d9', width:'35rem', margin: 'auto', borderRadius:'2rem', padding: '1px'}}>
        <h2><span style={{color: '#0B6623'}}>Green: Easy</span> || <span style={{color: '#EBCF2A'}}>Yellow: Medium</span> || <span style={{color: '#D30000'}}>Red: Hard</span></h2>
      </div>
      <h3>Total Cards: {cardInfo.length}</h3>
      {/* list of cards is stored in a json file */}
      <Card key={cardState} props={cardInfo.find(item => item.id == cardState)} />
      <div className="GuessContainer">

      </div>
      <div className="ButtonContainer">
        <button onClick={nextCard}>←</button>
        <button onClick={nextCard}>→</button>
        <button onClick={shuffle}>⟳→</button>
      </div>
    </div>
  )
}