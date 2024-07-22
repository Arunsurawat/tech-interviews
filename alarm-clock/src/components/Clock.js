import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>Current Time: {currentTime.toLocaleTimeString()}</div>;
};

export default Clock;
