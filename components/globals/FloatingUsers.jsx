'use client'
import React, { memo, useEffect, useState } from 'react';

export const FloatingCircles = memo(({ names, myname }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const newCircles = names.map((user, index) => ({
      id: index,
      name: user.name,
      score:user.score,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2, // Random horizontal speed
      speedY: (Math.random() - 0.5) * 2, // Random vertical speed
    }));

    setCircles(newCircles);

    const updateCircles = () => {
      setCircles(prevCircles =>
        prevCircles.map(circle => ({
          ...circle,
          x: circle.x + circle.speedX,
          y: circle.y + circle.speedY,
          speedX: circle.x + circle.speedX < 0 || circle.x + circle.speedX > window.innerWidth ? -circle.speedX : circle.speedX,
          speedY: circle.y + circle.speedY < 0 || circle.y + circle.speedY > window.innerHeight ? -circle.speedY : circle.speedY,
        }))
      );
    };

    const interval = setInterval(updateCircles, 50);

    return () => clearInterval(interval);
  }, [names]); // Add names as a dependency

  return (
    <div className='container'>
      {circles.map(circle => (
        <div key={circle.id}
          className={`circle ${myname === circle.name &&'border border-[#B2847A]'} backdrop-blur-md font-semibold rounded-full p-2 text-${circle.score === 0 ? 'sm' : `[${circle.score * 2}rem]`}`}
          style={{
          boxShadow:'0 0px 34px hsl(0deg 0% 100% / 11%)',
          top: circle.y,
            left: circle.x,
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${circle.score / 5})`, 
          }}
        >
          {circle.name}
          {myname === circle.name ? '(You)' :''}
        </div>
      ))}
    </div>
  );
});

FloatingCircles.displayName = 'FloatingCircles';