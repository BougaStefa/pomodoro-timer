import "./App.css";
import { useState } from "react";
import { LengthControl } from "./LengthControl";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  const [breakDuration, setBreakDuration] = useState(0.2);
  const [sessionDuration, setSessionDuration] = useState(0.1);
  const [currentTimer, setCurrentTimer] = useState(25);
  const [timerStarted, setTimerStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [action, setAction] = useState("Session");

  const handleIncrement = (state, setState) => {
    if (state < 60 && !timerStarted) {
      setState(state + 1);
    }
  };
  const handleDecrement = (state, setState) => {
    if (state > 1 && !timerStarted) {
      setState(state - 1);
    }
  };

  const handleReset = () => {
    console.log("this should reset");
    setBreakDuration(5);
    setSessionDuration(25);
    setTimerStarted(false);
    setCurrentTimer(25 * 60);
    setAction("Session");
    clearInterval(intervalId);
  };

  return (
    <div id="container">
      <div>
        <LengthControl
          label="break"
          duration={breakDuration}
          setDuration={setBreakDuration}
          onClickUp={() => handleIncrement(breakDuration, setBreakDuration)}
          onClickDown={() => handleDecrement(breakDuration, setBreakDuration)}
        />
        <LengthControl
          label="session"
          duration={sessionDuration}
          setDuration={setSessionDuration}
          onClickUp={() => handleIncrement(sessionDuration, setSessionDuration)}
          onClickDown={() =>
            handleDecrement(sessionDuration, setSessionDuration)
          }
        />
        <Timer
          initialDuration={sessionDuration}
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
          action={action}
          setAction={setAction}
        />
        <Controls
          reset={handleReset}
          currentTimer={currentTimer}
          setCurrentTimer={setCurrentTimer}
          timerStatus={timerStarted}
          setTimerStatus={setTimerStarted}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
          action={action}
          setAction={setAction}
          breakDuration={breakDuration}
          sessionDuration={sessionDuration}
        />
      </div>
    </div>
  );
}

export default App;
