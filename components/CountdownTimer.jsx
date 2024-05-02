'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({children}) => {
  const [countdown, setCountdown] = useState(120); // 1 minute in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          // alert('Countdown finished!');
          return prev;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  return (
    <div className='
    
    flex items-center text-white
    '>

      <p className='absolute top-8 left-2 md:top-10 md:left-10'>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
      {children}
    </div>
  );
};

export default CountdownTimer;