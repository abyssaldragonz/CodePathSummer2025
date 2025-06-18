import React, {useState} from 'react'

export default function Card({props}) {
    const [cardState, setCardState] = useState(-1)
    let bg = "None"

    function changeState() {
        setCardState(cardState * -1)
    }

    return (
        <div className="Card" onClick={changeState} style={{backgroundImage:`url(./${props.difficulty}.webp)`}}>
            {/* show question */}
            { (cardState == -1) &&
                <h2 className="questions">{props.question}</h2>
            }
            {/* show image if any */}
            {(cardState == -1) && props.image && 
                <img src={props.image}></img>
            }

            {/* otherwise, show answer */}
            { (cardState == 1) &&
                <h2>{props.answer[0]}</h2>
            }
        </div>
    )
}