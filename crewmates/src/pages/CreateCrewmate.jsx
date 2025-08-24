import { useState } from 'react'
import { Link } from 'react-router-dom';

import '../App.css'

import { supabase } from '../client'

export default function CreateCrewmate() {
    const [newCrewmate, setCrewmate] = useState({name: "", class: "", color: "", health: 50, speed: 50})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createCrewmate = async(event) => {
        event.preventDefault()
        await supabase
            .from('Crewmates')
            .insert({name: newCrewmate.name, class: newCrewmate.class, color: newCrewmate.color, health: newCrewmate.health, speed: newCrewmate.speed})
            .select()

        window.location = "/"
    }

  return (
    <div>
        <div className="header">
            <Link to="/"><button className="headerBtn"> Create Crewmate 🎨  </button></Link>
            <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery 🏆 </button></Link>
        </div>

        <h2>Create a Crewmate 🎨</h2>
        <hr />
        <form>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" onChange={handleChange} />
            <br />
            <br />

        <label htmlFor="color">Color</label> <br />
        <select id="color" value={newCrewmate.color} name="color" onChange={handleChange}>
            <option>None</option>
            <option>Red</option>
            <option>Orange</option>
            <option>Yellow</option>
            <option>Green</option>
            <option>Cyan</option>
            <option>Blue</option>
            <option>Purple</option>
            <option>Pink</option>
            <option>White</option>
            <option>Gray</option>
            <option>Black</option>
            <option>Brown</option>
        </select>
        <br />
        <br />

        <label htmlFor="class">Class</label><br />
        <select  id="class" value={newCrewmate.class} name="class" onChange={handleChange}>
            <option>None</option>
            <option>Warrior</option>
            <option>Archer</option>
            <option>Healer</option>
            <option>Mage</option>
            <option>Tank</option>
        </select>
        <br />
        <br />

        <label htmlFor="health">Health</label> <br />
        <input type="range" id="health" name="health" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="speed">Speed</label> <br />
        <input type="range" id="speed" name="speed" onChange={handleChange} />
        <br />
        <br />
        
        <input type="submit" value="Submit" onClick={createCrewmate} />
    </form>
    </div>
  )
}
