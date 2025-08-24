import React, {useState} from 'react'

export default function Card({cardProp, userGuess, recallFunc, lock}) {
    const [cardState, setCardState] = useState(-1)
    let bg = "None"

    function changeState() {
        if (lock) {
            setCardState(cardState * -1)
            checkAnswer()
        }
    }

    function checkAnswer() {
        userGuess = userGuess.toLowerCase()
        var isCorrect = false
        for (var s in cardProp.answer)
        {
            if ((cardProp.answer).indexOf(userGuess)!=-1 || userGuess.indexOf(cardProp.answer)!=-1)
                isCorrect = true;
        }

        {recallFunc(isCorrect)}
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

            {/* otherwise, user clicked so show answer */}
            { (cardState == 1) &&
                <h2>{cardProp.answer[0]}</h2>
            }
        </div>
    )
}