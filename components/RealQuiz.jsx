'use client'
import { useState } from 'react';
import { Next, Previous } from '@/components/globals/Icons';
import CountdownTimer from './CountdownTimer';
import { FormulateQuote } from '@/utils/services';

export default function RealQuiz({ QuizQuestions }) {
  console.log('QuizQuestions', QuizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(QuizQuestions.length).fill(null));

  const handleAnswer = (answer, correctAnswer, index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = answer;
    setSelectedAnswers(newSelectedAnswers);

    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QuizQuestions.length) {
      setTimeout(() => {
        setCurrentQuestionIndex(nextQuestionIndex);
      }, 200);
    } else {
      alert(`Quiz finished! Your score is ${score} out of ${QuizQuestions.length}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }, 200);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QuizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 200);
    }
  };

  const { question, answers } = QuizQuestions[currentQuestionIndex];
  console.log('question', question);
  const ass = FormulateQuote(question);

  return (
    <div className="py-4">
      <div className="border-l border-[#DEA78C] p-4 shadow-md">
        <h2 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold " style={{ whiteSpace: 'pre-line' }}>{ass}</h2>
      </div>
      <ul className='absolute left-1/2 -translate-x-1/2 bottom-4 flex flex-col flex-wrap w-full px-4 gap-4 justify-center text-sm'>
        <div className="flex justify-center mt-4 space-x-2">
          <button className={`transition duration-100 text-white font-bold p-2 rounded-full ${currentQuestionIndex === 0 ? 'bg-transparent' : 'bg-gray-900 hover:bg-gray-800'}`} onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            <Previous />
          </button>
          <button className={`transition duration-100 text-white font-bold p-2 rounded-full ${currentQuestionIndex === QuizQuestions.length - 1 ? 'bg-transparent' : 'bg-gray-900 hover:bg-gray-800'}`} onClick={handleNext} disabled={currentQuestionIndex === QuizQuestions.length - 1}>
            <Next />
          </button>
        </div>
        <div className='flex flex-row justify-center flex-wrap w-full gap-2'>
          {answers.map((answer, index) => (
            <li key={index} className="">
              <button className={`transition duration-100 text-black font-bold py-2 px-4 rounded-[1.5rem] ${selectedAnswers[currentQuestionIndex] === answer ? 'bg-[#DEA78C]' : 'bg-[#D0D0D0] hover:bg-[#B7B7B7]'}`} onClick={() => handleAnswer(answer, answers[0], currentQuestionIndex)}>
                {answer}
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}