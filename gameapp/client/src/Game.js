import React, { useState, useEffect } from 'react';
import Question from './Question';


function Game() {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [showScore, setShowScore] = useState(false)

    useEffect(() => {
        loadQuestions()
    }, [])
    //promise
    const loadQuestions = async () => {
        try {
            const response = await fetch('/questions');
            const data = await response.json();
         
            //data sent from the server
            setQuestions(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    //question and  update answer
    const handleAnswers = (question, answer) => {
        if (!answers.includes(question)) {
            setAnswers([...answers, { question, answer }])
        }
    }
    //create the results
    const handleResults = () => {
        if (answers.length < 10) {
            setError("Answer all questions")
        } else {
            answers.forEach(item => {
                if (item.question.correct_answer === "False" && item.answer === false) {
                    setScore(score => score + 1)
                    console.log(false)
                } else if (item.question.correct_answer === "True" && item.answer === true) {
                    setScore(score => score + 1)
                    console.log(true)
                }
            });
            setShowScore(true)
        }

    }
    //resets the game
    const tryAgain = () =>{
        setShowScore(false)
        setError("")
        setQuestions([])
        loadQuestions()
        setScore(0)
    }

    return (
        <div className='game-container'>
            {
                questions.map((question) => {
                    return <Question key={question.question} data={question}
                        handleAnswers={handleAnswers}
                    />
                })
            }
            <button className='submit-btn' onClick={handleResults}>Submit</button>
            <h2>{error && error}</h2>
            {
                showScore && <div>
                    <h1>score: {score}</h1>
                    <button className='try-btn' onClick={tryAgain}>Try Again</button>
                </div>
            }

        </div>
    )
}


export default Game