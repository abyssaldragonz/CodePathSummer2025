import React, {useState} from 'react'

export default function Card(props) {
    const [count, setCount] = useState(0)

    return (
        <div className="Card">
            <h2>{props.question}</h2>
            <h4>{props.answer}</h4>
        </div>
    )
}