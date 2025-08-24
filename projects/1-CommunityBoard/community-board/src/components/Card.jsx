import React from 'react'

export default function Card({props}){
    return (
        <div className="Card">
            <h2>{props.name}</h2>
            <h4>{props.description}</h4>
            <h6>{props.date}</h6>
            <a href={props.link}>
                <button>View More Info</button>
            </a>
        </div>
    )
}