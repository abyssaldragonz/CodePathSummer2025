import './App.css';
import Card from './components/Card'
import eventsInfo from './assets/events.json'

export default function App() {
  return (
    <div className="App">
    	<h1>Chicago Chinatown</h1>
		<h2>Community Board</h2>
		{eventsInfo.map((event, index) => (
			<Card key={index} props={event} />
		))}
    </div>
  )
}