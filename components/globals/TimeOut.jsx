'use client'
import { Link } from "next-view-transitions";

export function TimeOutComponent(
  {Quizfinished, score, total=10}
) {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-24 gap-6 ">
      {Quizfinished ?
        
        <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-[#B2847A]">Just Finished, Congrats!</h1>
        <p className="text-[#7b7b7b] dark:text-[#a0a0a0]">
         You scored {score} / {total}
        </p>
      </div>
      :
      <div className="space-y-4 text-center">
      <h1 className="text-3xl font-bold text-[#B2847A]">Time&apos;s Up!</h1>
      <p className="text-[#7b7b7b] dark:text-[#a0a0a0]">
        TOO SLOW, not even close
      </p>
    </div>
      }
      
      <div className="flex gap-2 md:gap-4 items-center">
        <Link
          className="hover:bg-[#AD7974] bg-[#B2847A] transition duration-200 rounded-[2rem]  px-2 md:px-4 py-1 text-sm md:text-base md:py-2  font-bold items-center"
          href="/"
        >
        Go Home Nigga
        </Link>
        <button
          onClick={()=> window.location.reload()}
          className="inline-flex  items-center justify-center rounded-[2rem] border border-[#c13483] bg-white px-2 md:px-4 py-1 text-sm md:text-base md:py-2  font-medium shadow-sm transition-colors hover:bg-[#f0f0f0] hover:text-[#c13483] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c13483] disabled:pointer-events-none disabled:opacity-50 dark:border-[#7b7b7b] dark:bg-[#1e1e1e] dark:hover:bg-[#2e2e2e] dark:hover:text-[#f0f0f0]"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  )
}