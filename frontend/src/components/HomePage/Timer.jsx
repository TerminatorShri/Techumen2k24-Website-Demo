import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-12T23:59:59").getTime(); // Replace with your target date
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center h-24 w-24 md:h-32 md:w-32 bg-gradient-to-tr from-slate-500 to-slate-100 p-4 md:p-6 rounded-full mx-2 mb-5"
      >
        <span className="text-5xl md:text-6xl font-extrabold font-sans text-black acme-font">
          {timeLeft[interval].toString().padStart(2, "0")}
        </span>
        <span className="text-black font-bold capitalize text-lg md:text-xl tracking-tight acme-font">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center items-center py-10">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-xl">Time's up!</span>
      )}
    </div>
  );
};

export default Timer;
