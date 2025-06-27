import './App.css';
import Card from './components/Card'
import cardInfo from './assets/cards.json'
import React, {useState, useRef} from 'react'

export default function App() {
  const userInputRef = useRef("")
  const [cardState, setCardState] = useState(0)
  const [userStreak, setStreak] = useState(0)
  const [longestStreak, setPB] = useState(0)
  const [inputState, setInputState] = useState("") // if user is correct or not
  const [userLock, setLock] = useState(false)
  const [tempPlaceholder, setTemp] = useState(true)
  
  function resetCard() {
    userInputRef.current.value = ""
    setInputState("")
    document.getElementById("userGuess").disabled = false;
    setLock(false)
    if (cardState == 0)
      document.getElementById("prevButton").disabled = false;
    if (cardState == cardInfo.length-1)
      document.getElementById("prevButton").disabled = false;
  }

  function prevCard() {
    if (cardState >= 1){
      setCardState(cardState-1)
      document.getElementById("nextButton").disabled = false;
      document.getElementById("nextButton").style.backgroundColor = "black";
      document.getElementById("nextButton").style.cursor = "pointer";
    }
    else {
      document.getElementById("prevButton").disabled = true;
      document.getElementById("prevButton").style.backgroundColor = "gray";
      document.getElementById("prevButton").style.cursor = "default";
    }
    resetCard()
  }

  function nextCard() {
    if (cardState <= cardInfo.length-1){
      setCardState(cardState+1)
      document.getElementById("prevButton").disabled = false;
      document.getElementById("prevButton").style.backgroundColor = "black";
      document.getElementById("prevButton").style.cursor = "pointer";
    }
    else {
      document.getElementById("nextButton").disabled = true;
      document.getElementById("nextButton").style.backgroundColor = "gray";
      document.getElementById("nextButton").style.cursor = "default";
    }
    resetCard()
  }

  function shuffle() {
    for (var i = cardInfo.length-1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cardInfo[i];
      cardInfo[i] = cardInfo[j];
      cardInfo[j] = temp;
    }
    setTemp(!tempPlaceholder) // force rerender of the first card in list
    setCardState(0)
    resetCard()
    document.getElementById("prevButton").disabled = true;
    document.getElementById("prevButton").style.backgroundColor = "gray";
    document.getElementById("prevButton").style.cursor = "default";
    document.getElementById("nextButton").disabled = false;
    document.getElementById("nextButton").style.backgroundColor = "black";
    document.getElementById("nextButton").style.cursor = "pointer";
  }

  function handleUserInput() {
    setTemp(!tempPlaceholder) // force rerender of card to pass prop
    setLock(true)
    document.getElementById("userGuess").disabled = true;
  }

  function checkStreak(isCorrect) {
    if (isCorrect){
      setInputState("correctGuess")
      setStreak(userStreak+1)
      if (userStreak >= longestStreak)
        setPB(userStreak+1)
    }
    else {
      setInputState("incorrectGuess")
      setStreak(0)
    }
  }

  return (
    <div className="App">
    	<h1>Creature Flashcards</h1>
      <h2>Think you know your creatures? Test your creature knowledge!</h2>
      <div style={{backgroundColor:'#9ec9d9', width:'35rem', margin: 'auto', borderRadius:'2rem', padding: '1px'}}>
        <h2><span style={{color: '#0B6623'}}>Green: Easy</span> || <span style={{color: '#EBCF2A'}}>Yellow: Medium</span> || <span style={{color: '#D30000'}}>Red: Hard</span></h2>
      </div>
      <h3>Total Cards: {cardInfo.length}</h3>
      <h3>Current Streak: {userStreak}</h3>
      <h3>High Score: {longestStreak}</h3>
      {/* list of cards is stored in a json file */}
      <Card key={cardInfo[cardState].id} cardProp={cardInfo[cardState]} userGuess={userInputRef.current.value} recallFunc={checkStreak} lock={userLock} />
      <div className="GuessContainer">
        <input className={`userGuess ${inputState}`} type="text" id="userGuess" placeholder="Enter your guess here" ref={userInputRef} ></input>
        <button onClick={handleUserInput}>✔️</button>
      </div>
      <div className="ButtonContainer">
        <button style={{backgroundColor: "gray", cursor: "default"}} onClick={prevCard} id="prevButton">←</button>
        <button onClick={nextCard} id="nextButton">→</button>
        <button onClick={shuffle}>⟳</button>
      </div>
    </div>
  )
}