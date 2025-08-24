import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import allCatBreeds from './fetchAllBreeds'


function App() {
  const [catData, setData] = useState(null);
  const [allBreeds, setBreeds] = useState(allCatBreeds)
  const [banList, setBan] = useState([]);
  const [tempState, setTemp] = useState(false)
  const [randomName, setName] = useState("")
  const [randomGender, setGender] = useState("")
  const [randomPersonality, setPersonality] = useState("")

  const generateCatImage = async () => {
    try {
        var randomBreed = allBreeds[ Math.floor(Math.random() * allBreeds.length) ]
        while (banList.includes(randomBreed))
        { randomBreed = allBreeds[ Math.floor(Math.random() * allBreeds.length) ]
          console.log(randomBreed)
        }

        const genders = ["male", "female", "special"]
        const personalities = ["playful", "lazy", "chill", "goofy", "lovely", "cuddly", "relaxed"]

        setGender(genders[ Math.floor(Math.random() * genders.length) ])
        setPersonality(personalities[ Math.floor(Math.random() * personalities.length) ])

        const data = await (await fetch(`https://api.thecatapi.com/v1/images/search?limit=1&api_key=${ACCESS_KEY}&breed_ids=${randomBreed}`)).json()
        setData(data)
        console.log(catData)
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    <div className={"mainBody"}>
      <div className={"catData"}>
        <h1>Veni Vici!</h1>
        <h2>CATS.</h2>

        { randomName && 
          <button className={"attribute"} onClick={() => {banList.push(randomName); setTemp(!tempState)}}>Name: {randomName}</button>
        }

        { catData && catData[0].breeds &&
          <button className={"attribute"} onClick={() => {banList.push(catData[0].breeds[0].name); setTemp(!tempState)}}>Cat Breed: {catData[0].breeds[0].name}</button>
        }

        { randomGender &&
        <button className={"attribute"} onClick={() => {banList.push(randomGender); setTemp(!tempState)}}>Gender: {randomGender}</button>
        }
        { randomPersonality &&
        <button className={"attribute"} onClick={() => {banList.push(randomPersonality); setTemp(!tempState)}}>Personality: {randomPersonality}</button>
        }
        {
          catData && catData[0].url &&
          <div>
            <img className={"catImage"} src={catData[0].url}></img>
          </div>
        }

        <button onClick={generateCatImage}>Generate Cat Image</button>
      </div>
      <div className={"banList"}>
        <h2>Ban List</h2>
        { banList.map((object, id) => (
            <button className={"attribute"} key={id} onClick={() => {var ind = banList.indexOf(object); banList.splice(ind, 1); setTemp(!tempState)}}>{object}</button>
          ))
        }
      </div>
    </div>
  )
}

export default App
