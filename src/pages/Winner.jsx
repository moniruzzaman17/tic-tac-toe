import React, { useEffect } from 'react';
import './css/Winner.css'; // Import custom CSS for animation

const Winner = ({ winnerName }) => {
  useEffect(() => {
    // Start the confetti animation
    const startConfetti = () => {
      const confetti = window.confetti || function() {};
      confetti({
        particleCount: 200,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff0', '#f0f', '#0ff', '#0f0', '#00f', '#f00']
      });
    };

    // Dynamically load the confetti library from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.0/dist/confetti.browser.min.js';
    script.onload = startConfetti;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up
    };
  }, []);

  return (
    <div className="winner-animation">
      <div className="celebration-text">
        <h1>Congratulations, {winnerName}!</h1>
        <p>You are the winner!</p>
      </div>
      <div className="trophy">
        <img src="https://i.ibb.co/kVZ3CN6/trophy.png" alt="Trophy" />
      </div>
    </div>
  );
};

export default Winner;
