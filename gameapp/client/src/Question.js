import React from "react";
import { useState } from "react";


const Question = (props) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const toggleDisabled = () =>{
        setIsDisabled(true)
    }
    return (
        <div className="question">
            <h3>{props.data.question}</h3>
            <div>
                <button 
                disabled={isDisabled}
                onClick={() => {
                    props.handleAnswers(props.data, true)
                    toggleDisabled()
                }}>True</button>
                <button 
                disabled={isDisabled}
                onClick={() => {
                    props.handleAnswers(props.data, false)
                    toggleDisabled()
                }}>False</button>
            </div>
        </div>
    )
}

export default Question

// {
//     "category": "General Knowledge",
//     "type": "boolean",
//     "difficulty": "easy",
//     "question": "The Great Wall of China is visible from the moon.",
//     "correct_answer": "False",
//     "incorrect_answers": [
//         "True"
//     ]
// }