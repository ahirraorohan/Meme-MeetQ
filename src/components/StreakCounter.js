import React, { useState, useEffect } from 'react';

function StreakCounter() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentStreak = parseInt(localStorage.getItem('streak') || '0', 10);
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      if (lastVisit && new Date(lastVisit).getDate() === new Date(today).getDate() - 1) {
        setStreak(currentStreak + 1);
        localStorage.setItem('streak', currentStreak + 1);
      } else {
        setStreak(1);
        localStorage.setItem('streak', '1');
      }
      localStorage.setItem('lastVisit', today);
    } else {
      setStreak(currentStreak);
    }
  }, []);

  return (
    <div className="streak-counter bg-pastelPink p-4 rounded-md mt-4 text-pastelPurple">
      <h2>Streak Counter</h2>
      <p>You are on a {streak}-day streak!</p>
    </div>
  );
}

export default StreakCounter;
