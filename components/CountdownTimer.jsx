'use client'
import React, { useState, useEffect } from 'react';
import {TimeOutComponent} from '@/components/globals/TimeOut'
const CountdownTimer = ({ children }) => {
  
  const [countdown, setCountdown] = useState(120); 
  const [TimeOut, setTimeOut] = useState(false); 
  const [Name, setName] = useState(''); 

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'))
    }
  

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          setTimeOut(true)
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

      <div className='absolute top-12 left-2 md:top-14 md:left-10'>
        <div className='font-semibold' >Hello 
        <span className='text-[#DEA78C] ml-1 uppercase'>
        {Name}
        </span>        
        </div>
        <span className={`${TimeOut ? 'text-red-500' : ''}`}>
          {!TimeOut &&
         '-'} 
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
        </span>
       
      </div>
      {TimeOut ?
        
        <TimeOutComponent />
        :
        children

    }
      
    </div>
  );
};

export default CountdownTimer;