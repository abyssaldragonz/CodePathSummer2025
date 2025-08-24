import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import '../App.css'

import { supabase } from '../client'

export default function EditCrewmate({crewmate}) {
    const {id} = useParams()
    const [newCrewmate, setCrewmate] = useState({name: crewmate.name, class: crewmate.class, color: crewmate.colo, health: crewmate.health, speed: crewmate.speed})

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrewmate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
        console.log(newCrewmate)
    }

    const updateCrewmate = async(event) => {
        event.preventDefault()
        await supabase
            .from('Crewmates')
            .update({name: newCrewmate.name, class: newCrewmate.class, color: newCrewmate.color, health: newCrewmate.health, speed: newCrewmate.speed})
            .eq('id', crewmate.id)
        window.location = "/gallery"
    }

    const deleteCrewmate = async(event) => {
        event.preventDefault()
        await supabase
            .from('Crewmates')
            .delete()
            .eq('id', crewmate.id)
        window.location = "/gallery"
    }

  return (
    <div style={{backgroundColor: `${crewmate.color}`}}>
      <h2 style={{WebkitTextStroke: 'black 1px'}}>EDITING CREWMATE: <span style={{fontWeight: 'bolder'}}>{crewmate.name}</span></h2>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" placeholder={newCrewmate.name} id="name" name="name" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="color">Color</label> <br />
        <select id="color" placeholder={newCrewmate.color} name="color" onChange={handleChange}>
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
        <select id="class" placeholder={newCrewmate.class} name="class" onChange={handleChange}>
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
        <input type="range" placeholder={newCrewmate.health} id="health" name="health" onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="speed">Speed</label> <br />
        <input type="range" placeholder={newCrewmate.speed} id="speed" name="speed" onChange={handleChange} />
        <br />
        <br />
        
        <input type="submit" value="Submit" onClick={updateCrewmate} />
        <br />
        <br />
        <button style={{backgroundColor: 'red', border: 'solid white 0.5rem'}} onClick={deleteCrewmate}>DELETE CREWMATE</button> 
    </form>
    </div>
  )
}
