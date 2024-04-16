import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import "./Timer.css"
export default function Timer({initialDuration}) {

  const [action, setAction] = useState("Session");
  const [currentTimer, setCurrentTimer] = useState("25");

    useEffect(() => {
        setCurrentTimer(initialDuration);
    },[initialDuration])

  return (
    <div className="timer">
      <div className="timer-wrapper">
        <div id="timer-label">{action}</div>
        <div id="time-left">{currentTimer+':00'}</div>
      </div>
    </div>
  );
}

Timer.propTypes = {
    initialDuration:PropTypes.number,
}