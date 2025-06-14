import './App.css';
import Card from './components/Card'
import cardInfo from './assets/cards.json'

export default function App() {
  return (
    <div className="App">
    	<h1>Chicago Chinatown</h1>
      <h2 style={{color: 'black', fontSize: '2em'}}>AAPI Community Board</h2>
      <h3 style={{color: 'black'}}>Celebrating culture and heritage</h3>
      <div className="EventsContainer">
        {cardInfo.map((event, index) => (
          <Card key={index} props={event} />
        ))}
      </div>
    </div>
  )
}