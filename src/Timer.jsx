import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Timer.css";
export default function Timer({ initialDuration,currentTimer,setCurrentTimer,action,setAction }) {
  

  useEffect(() => {
    setCurrentTimer(initialDuration * 60);
  }, [initialDuration,action]);

  const formatMinutesSeconds = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return (
    <div className="timer">
      <div className="timer-wrapper">
        <div id="timer-label">{action}</div>
        <div id="time-left">{(currentTimer)}</div>
      </div>
    </div>
  );
}

Timer.propTypes = {
  initialDuration: PropTypes.number,
  currentTimer:PropTypes.number,
  setCurrentTimer:PropTypes.func,
  action:PropTypes.string,
  setAction:PropTypes.func,
};
