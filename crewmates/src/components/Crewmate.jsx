import { useState, useEffect } from 'react'
import AmongUs from '../assets/AmongUs.png'
import { Link } from 'react-router-dom';
import EditCrewmate from '../pages/EditCrewmate';

export default function Crewmate({crewmate}) {
    const [tempState, setTemp] = useState(false)

    return (
        <div className="card" style={{backgroundColor: `${crewmate.color}`}}>
            { !tempState && 
                <div>
                    <img src={AmongUs} style={{maxWidth: '75%'}} />
                    <h3 style={{WebkitTextStroke: 'black 1px'}}>Name: <span className='cardText'>{crewmate.name}</span></h3>
                    <h3 style={{WebkitTextStroke: 'black 1px'}}>Class: <span className='cardText'>{crewmate.class}</span></h3>
                    <h3 style={{WebkitTextStroke: 'black 1px'}}>Health: <span className='cardText'>{crewmate.health}</span></h3>
                    <h3 style={{WebkitTextStroke: 'black 1px'}}>Speed: <span className='cardText'>{crewmate.speed}</span></h3>

                    <button style={{backgroundColor: 'gray', border: 'solid white 0.5rem'}} onClick={() => {setTemp(!tempState)}}>EDIT CREWMATE</button>
                </div>
            }
            
            {
                tempState && 
                <EditCrewmate crewmate={crewmate} />
            }
        </div>
    )
}