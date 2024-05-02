import React from 'react'
import { HorizontalSpacer } from './Icons'
import { Link } from 'next-view-transitions'

export const Landing = () => {
  return (
    <div className="w-full rounded-xl bg-transparent py-12 md:py-20">
       <svg
           className="absolute opacity-40 left-0 top-0 w-full h-full -z-10 object-cover"viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="b" cx="50%" cy="50%" r="50%" fx="20%" fy="36%"><stop offset="0%" stopColor="#DEA78C" /><stop offset="100%" stopColor="rgba(194,68,247,0.2)" /></radialGradient><filter id="a" x="-500" y="-500" width="2000" height="2000" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceGraphic" stdDeviation="100" /></filter></defs><rect width="100%" height="100%" /><g filter="url(#a)">

          <svg width="1000" height="1000" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" transform="translate(-217.252 25.924)"><path fill="url(#b)" d="M422 350.5q-56 100.5-174.5 105T104 355q-25-105 5.5-200t134-83.5q103.5 11.5 169 95t9.5 184Z" /></svg></g>
        </svg>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Taylor Swift Quiz
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                alt="Taylor Swift"
                className="rounded-full"
                height="200"
                src="https://lastfm.freetls.fastly.net/i/u/770x0/48aa10ec26931086835287e62064ee00.jpg#48aa10ec26931086835287e62064ee00"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
          </div>
          <p className="text-lg text-gray-200">Real Swiftie?</p>
          
            <Link href='/quiz' className="hover:bg-[#AD7974] transition duration-200 rounded-[2rem] bg-[#B2847A] px-2 md:px-4 py-1 text-sm md:text-base md:py-2  font-bold ">
              Start Quiz
          </Link>
          
          <HorizontalSpacer small={true}/>
          </div>
      </div>
      </div>
  )
}
