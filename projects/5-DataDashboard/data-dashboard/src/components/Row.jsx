import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'

export default function Row({prop, functionCallback}) {
    
    return (
        <div className="row">
            <h3>{prop.name}</h3>
            <h3>{prop.id}</h3>

            {prop.is_potentially_hazardous_asteroid && <h3 style={{color: 'red'}}>Yes</h3>}
            {!prop.is_potentially_hazardous_asteroid && <h3 style={{color: 'green'}}>No</h3>}

            {prop.is_sentry_object && <h3 style={{color: 'purple'}}>Yes</h3>}
            {!prop.is_sentry_object && <h3 style={{color: 'cornflowerblue'}}>No</h3>}

            <button onClick={() => {functionCallback(prop)}}>Details</button>

            <a href={prop.nasa_jpl_url}> <button>Lookup</button> </a>
        </div>
    )
}