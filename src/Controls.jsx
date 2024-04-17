import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRefresh, faPause } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function Controls({
  reset,
  currentTimer,
  setCurrentTimer,
  timerStatus,
  setTimerStatus,
  intervalId,
  setIntervalId,
  action,
  setAction,
  breakDuration,
  sessionDuration,
}) {
  const breakTime = breakDuration * 60;
  const sessionTime = sessionDuration * 60;
  const audio = document.getElementById("beep");

  useEffect(() => {
    if (timerStatus) {
      console.log("Start timer");
      const id = setInterval(() => {
        setCurrentTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      audio.play();
      setIntervalId(id);
    } else {
      console.log("Pause Timer");
      clearInterval(intervalId);
    }
  }, [timerStatus, action]);

  useEffect(() => {
    if (currentTimer === 0) {
      console.log("Clear Interval");
      clearInterval(intervalId);
    }
  }, [currentTimer]);

  useEffect(() => {
    if (currentTimer === 0) {
      console.log("Change Action");
      const newAction = action === "Session" ? "Break" : "Session";
      setTimeout(() => {
        audio.pause();
        setAction(newAction);
      }, 1000);
    }
  }, [currentTimer]);

  useEffect(() => {
    if (currentTimer === 0) {
      console.log("Change Timer");
      setCurrentTimer(action === "Session" ? sessionTime : breakTime);
    }
  }, [action]);

  return (
    <div className="timer-control">
      <button id="start_stop" onClick={() => setTimerStatus(!timerStatus)}>
        <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
        <FontAwesomeIcon icon={faPause} style={{ color: "white" }} />
      </button>
      <button id="reset" onClick={reset}>
        <FontAwesomeIcon icon={faRefresh} style={{ color: "white" }} />
      </button>
      <audio
        src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"
        preload="auto"
        id="beep"
      ></audio>
    </div>
  );
}

Controls.propTypes = {
  reset: PropTypes.func,
  currentTimer: PropTypes.number,
  setCurrentTimer: PropTypes.func,
  timerStatus: PropTypes.bool,
  setTimerStatus: PropTypes.func,
  intervalId: PropTypes.number,
  setIntervalId: PropTypes.func,
  action: PropTypes.string,
  setAction: PropTypes.func,
  breakDuration: PropTypes.number,
  sessionDuration: PropTypes.number,
};
