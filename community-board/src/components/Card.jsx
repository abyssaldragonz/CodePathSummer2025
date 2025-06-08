import React from 'react'

export default function Card({props}){
    return (
        <div className="Card">
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <a href={props.link}>
                <button>View More Info</button>
            </a>
        </div>
    )
}