import { useState, useEffect } from 'react'
import './App.css'
import Row from './components/Row'
const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [START_DATE, setStart] = useState("2025-09-07");
  
  const [hazardCount, setHazard] = useState(-1)
  const [sentryCount, setSentry] = useState(-1)

  const [searchID, setSearch] = useState("")
  const [hazardFilter, setHazardFilter] = useState(true)
  const [sentryFilter, setSentryFilter] = useState(true)
  const [tempState, setTemp] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const splicedResult = result.near_earth_objects[START_DATE].slice(0, 10)
        // console.log(result)
        setData(splicedResult);

        let count = 0
        splicedResult.forEach( (element) =>{
          if (element.is_potentially_hazardous_asteroid)
            count++;
          }
        )
        setHazard(count)

        count = 0
        splicedResult.forEach( (element) =>{
          if (element.is_sentry_object)
            count++;
          }
        )
        setSentry(count)

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  console.log(data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null; // or initial state handling


  return (
    <>
      <div>
        <h1>Data Dashboard</h1>

        <div className="stats">
          <div className="box">
            <h2>Date Range Start</h2>
            <h3>{START_DATE}</h3>
          </div>

          <div className="box">
            <h2>Potential Hazard Count</h2>
            <h3>{hazardCount}</h3>
          </div>

          <div className="box">
            <h2>Sentry Object Count</h2>
            <h3>{sentryCount}</h3>
          </div>
        </div>

        <hr />

        <input type="text" placeholder="Search Name or ID" value={searchID} onChange={(e) => setSearch(e.target.value)}></input>
        <input type="date" value={START_DATE} onChange={(e) => {setStart(e.target.value)}}></input>

        <div style={{display: 'flex', gap: '5rem', justifyContent:'center'}}> 
          <button className={`${hazardFilter}Toggle`} onClick={() => {setHazardFilter(!hazardFilter)}}>Filter Hazard</button>
          <button className={`${sentryFilter}Toggle`} onClick={() => {setSentryFilter(!sentryFilter)}}>Filter Sentry</button>
        </div>

        <hr />

        <div className="row">
            <h4>Name</h4>
            <h4> </h4>
            <h4> </h4>
            <h4>ID</h4>
            <h4> </h4>
            <h4> </h4>
            <h4>Hazardous?</h4>
            <h4>Sentry Object?</h4>
        </div>

        <hr />

        {data && 
          Object.entries(data)
          .filter(([_, objectData]) =>
            (hazardFilter ^ objectData.is_potentially_hazardous_asteroid)
            &&
            (sentryFilter ^ objectData.is_sentry_object)
            &&
            (objectData.id.includes(searchID) || objectData.name.includes(searchID.toUpperCase()))
          )
          .map((event, objectData) => (
				  <div className="row">
            <Row key={event[1].id} prop={event[1]} />
          </div>
			  ))}
      </div>
    </>
  )
}

export default App
