'use client'
import { useState } from 'react';
import { Next, Previous } from '@/components/globals/Icons';
import CountdownTimer from './CountdownTimer';

export default function RealQuiz({ QuizQuestions }) {
  console.log('QuizQuestions', QuizQuestions);
 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QuizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert(`Quiz finished! Your score is ${score} out of ${QuizQuestions.length}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QuizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const { question, answers } = QuizQuestions[currentQuestionIndex];

  return (
    <div className="flex items-center text-white">
      <CountdownTimer/>
      <div className="p-8 rounded-lg shadow-md">
        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-center">{question}</h2>
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="bg-gray-900  transition duration-200 hover:bg-gray-800 text-white font-bold p-2 rounded-full"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
             <Previous/>
          </button>
          <button
            className="bg-gray-900  transition duration-200 hover:bg-gray-800 text-white font-bold p-2 rounded-full"
            onClick={handleNext}
            disabled={currentQuestionIndex === QuizQuestions.length - 1}
          >
            <Next/>
          </button>
        </div>
      </div>
      <ul className='absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-row flex-wrap w-full px-4 gap-2 justify-center text-sm'>
        {answers.map((answer, index) => (
          <li key={index} className="">
            <button
              className="bg-[#D0D0D0] transition duration-200 hover:bg-[#B7B7B7] text-black font-bold py-2 px-4 rounded-[1.5rem]"
              onClick={() => handleAnswer(answer, answers[0])}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}