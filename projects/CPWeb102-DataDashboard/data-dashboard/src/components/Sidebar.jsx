import { useState, useEffect } from 'react'

export default function Sidebar({prop}) {
    return (
        <div className={"sidebar"}>
            <h2>Absolute Magnitude:</h2>
            <h3>{prop.absolute_magnitude_h}</h3>
            <h3>[H] absolute magnitude (magnitude at 1 au from Sun and observer)</h3>
            <hr />
            <h2>Estimated Diameter: </h2>
            <h3>{prop.estimated_diameter.kilometers.estimated_diameter_min} - {prop.estimated_diameter.kilometers.estimated_diameter_max} kilometers</h3>
            <h3>{prop.estimated_diameter.meters.estimated_diameter_min} - {prop.estimated_diameter.meters.estimated_diameter_max} meters</h3>
            <h3>{prop.estimated_diameter.feet.estimated_diameter_min} - {prop.estimated_diameter.feet.estimated_diameter_max} feet</h3>
            <h3>{prop.estimated_diameter.miles.estimated_diameter_min} - {prop.estimated_diameter.miles.estimated_diameter_max} miles</h3>
            <hr />
            <h2>Estimated Approach Date:</h2>
            <h3>{prop.close_approach_data[0].close_approach_date_full}</h3>
            <hr />
            <h2>Miss Distance:</h2>
            <h3>{prop.close_approach_data[0].miss_distance.kilometers} kilometers</h3>
        </div>
    )
}