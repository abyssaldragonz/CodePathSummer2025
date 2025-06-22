import React, {useState} from 'react'

export default function Card({cardProp, userGuess}) {
    const [cardState, setCardState] = useState(-1)
    let bg = "None"

    function changeState() {
        setCardState(cardState * -1)
    }

    function checkAnswer() {
        userGuess = lower(userGuess)
        for (s in cardProp.answer)
        {
            if ((cardProp.answer).indexOf(userGuess)!=-1 || userGuess.indexOf(cardProp.answer)!=-1)
                console.log("correct")
            else
                console.log("incorrect")
        }   
    }

    return (
        <div className="Card" onClick={changeState} style={{backgroundImage:`url(./${cardProp.difficulty}.webp)`}}>
            {/* show question */}
            { (cardState == -1) &&
                <h2 className="questions">{cardProp.question}</h2>
            }
            {/* show image if any */}
            {(cardState == -1) && cardProp.image && 
                <img src={cardProp.image}></img>
            }

            {/* otherwise, show answer */}
            { (cardState == 1) &&
                <h2>{cardProp.answer[0]}</h2>
            }
        </div>
    )
}