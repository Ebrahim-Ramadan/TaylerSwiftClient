'use client'

import { Spotify } from "./Icons";
import { CursorTrail } from "./ShuffleMe";

export const Subscribe = () => {
  return (
    <>
      <div className="wrapper min-h-screen w-full flex-col justify-center absolute left-1//2 right-0">
      
        <a
          href='https://open.spotify.com/playlist/1cjPVUxEXtPeKpptLS8zTN?si=5cc8493cda7648b3&pt=1ab64e6f75f1dca7740a86c5305f8b90'
          className="button cursor-pointer transition duration-200 rounded-[2rem] border-[#B2847A] text-white bakcdrop-blur-sm bg-[#AD7974] border">
           Open Spotify
          <div className="bubble">
            <Spotify className="h-8 w-8" />
          </div>
        </a>
      </div>

      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style jsx>{`
        .wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button {
          display: inline-flex;
          font-weight: bold;
          padding: 0 10px 0 10px;
          font-size: 1.25rem;
          line-height: 1rem;
          height: 44px;
          align-items: center;
        }

        .bubble {
          z-index: -10;
          display: flex;
          background: transparent;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          position: absolute;
          content: "";
          border-radius: 12px;
          transition: transform 0.6s;
          transition-timing-function: bezier(0.2, 0.8, 0.2, 1.2);
          transform: translateX(80%) translateY(0%);
        }

        .button:hover .bubble {
          transform: translateX(210%) translateY(0%);
        }
      `}</style>
    </>
  );
};

export default Subscribe