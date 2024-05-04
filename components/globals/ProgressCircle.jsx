import React, { useState, useEffect, useRef } from 'react';

const DualProgressBar = ({ currentQuestionIndex1, totalQuestions1, currentScore, totalQuestions2=10 }) => {
  const [progress1, setProgress1] = useState((currentQuestionIndex1 > 0 ? currentQuestionIndex1 : 0) * (100 / totalQuestions1));
  const [progress2, setProgress2] = useState((currentScore > 0 ? currentScore : 0) * (100 / totalQuestions2));
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const targetProgress1 = (currentQuestionIndex1 + 1) * (100 / totalQuestions1);
    const targetProgress2 = (currentScore + 1) * (100 / totalQuestions2);

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const duration = 250; // Animation duration in milliseconds
      const newProgress1 = Math.min(
        progress1 + ((targetProgress1 - progress1) * elapsedTime) / duration,
        targetProgress1
      );
      const newProgress2 = Math.min(
        progress2 + ((targetProgress2 - progress2) * elapsedTime) / duration,
        targetProgress2
      );

      setProgress1(newProgress1);
      setProgress2(newProgress2);

      if (newProgress1 < targetProgress1 || newProgress2 < targetProgress2) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [currentQuestionIndex1, totalQuestions1, currentScore, totalQuestions2]);

  const progressStyle1 = {
    background: `conic-gradient(#DEA78C ${progress1}%, #a5a5a54a ${progress1}%)`,
  };

  const progressStyle2 = {
    background: `conic-gradient(green ${progress2}%, transparent ${progress2}%)`,
  };

  return (
    <div className="progress-container">
      <div className="progress-circle" style={progressStyle1}></div>
      <div className="progress-circle" style={progressStyle2}></div>
      <style jsx>{`
        .progress-container {
          width: 30px;
          height: 30px;
          position: relative;
        }

        .progress-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.5s ease;
          position: absolute;
          top: 0;
          left: 0;
        }

      
      `}</style>
    </div>
  );
};

export default DualProgressBar;
