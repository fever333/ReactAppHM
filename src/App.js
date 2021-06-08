import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Who участвовал в разработке JavaScript?",
      answerOptions: [
        {
          answerText: "Фрэнки четыре пальца и боксёр Джордж",
          isCorrect: false,
        },
        { answerText: "Миша пистолет один всё сделал", isCorrect: false },
        {
          answerText: "Брендан Эйх, Марк Андрессен и Билл Джой",
          isCorrect: true,
        },
        { answerText: "Бобби голова и Валя пуля", isCorrect: false },
      ],
    },
    {
      questionText: "В каком году родился JavaScript?",
      answerOptions: [
        { answerText: "2001", isCorrect: false },
        { answerText: "1875", isCorrect: false },
        { answerText: "1995", isCorrect: true },
        { answerText: "1994", isCorrect: false },
      ],
    },
    {
      questionText: "Which самый лучший year в твоей life ",
      answerOptions: [
        {
          answerText: "1992",
          isCorrect: false,
        },
        { answerText: "2018", isCorrect: true },
        {
          answerText: "2010",
          isCorrect: false,
        },
        { answerText: "2020", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="section__score">
          <div>
            Правильных ответов {score} из {questions.length}
            <button onClick={refresh} className="refresh__bh">
              Ещё раз
            </button>
          </div>
        </div>
      ) : (
        <div className="quizz">
          <div className="question__section">
            <div className="question__count">
              <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className="question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
