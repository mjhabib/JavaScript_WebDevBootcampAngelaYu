import React, { useState } from "react";

export default function Time() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, timeState] = useState(time);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    timeState(newTime)
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button
        onClick={updateTime}
      >
        Update time
      </button>
    </div>
  );
}
