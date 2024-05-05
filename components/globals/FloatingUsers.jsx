'use client'
import React, { memo, useEffect, useState } from 'react';

export const FloatingCircles = memo(({ names }) => {
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
        <div key={circle.id} className='circle text-sm'
        style={{
          top: circle.y,
          left: circle.x,
          backgroundColor: `rgba(222,167, 140, ${circle.score / 10})`, // Set color based on score
        }}>
          {circle.name}
        </div>
      ))}
    </div>
  );
});

FloatingCircles.displayName = 'FloatingCircles';