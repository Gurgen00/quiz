import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const questions = [
    {
      questionText: "what is HTML ?",
      answerOption: [
        { answerText: "hello", isCorrect: false, id: Math.random() },
        { answerText: "hajox", isCorrect: true, id: Math.random() },
        { answerText: "vonc es", isCorrect: false, id: Math.random() },
      ]
    },
    {
      questionText: "what is CSS ?",
      answerOption: [
        { answerText: "hello", isCorrect: true, id: Math.random() },
        { answerText: "hajox", isCorrect: false, id: Math.random() },
        { answerText: "vonc es", isCorrect: false, id: Math.random() },
      ]
    },
    {
      questionText: "what is JS ?",
      answerOption: [
        { answerText: "hello", isCorrect: false, id: Math.random() },
        { answerText: "hajox", isCorrect: false, id: Math.random() },
        { answerText: "vonc es", isCorrect: true, id: Math.random() },
      ]
    },
    {
      questionText: "what is REact.JS ?",
      answerOption: [
        { answerText: "hello", isCorrect: false, id: Math.random() },
        { answerText: "hajox", isCorrect: true, id: Math.random() },
        { answerText: "vonc es", isCorrect: false, id: Math.random() },
      ]
    },
  ]

 

  console.log(score, "score");

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else {
      setShowScore(true)
    }
  }

const refresh = () =>{
  window.location.reload()
}


  return (
    <div className="App">
      {showScore ? (
        <div>
          duq vastakel eq {score}/{questions.length} ic
          <button onClick={refresh}>Tarmacnel</button>
        </div>
      ) : (
        <>
          <div>
            {questions[currentQuestion].questionText}
          </div>
          <div>
            {questions[currentQuestion].answerOption.map((answerOp) => {
              return <button key={answerOp.id}
                onClick={() => handleAnswer(answerOp.isCorrect)}
              >{answerOp.answerText}</button>
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
