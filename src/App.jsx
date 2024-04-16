import "./App.css";
import { useState } from "react";
import { LengthControl } from "./LengthControl";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  const [breakDuration, setBreakDuration] = useState(5);
  const [sessionDuration, setSessionDuration] = useState(25);

  const handleIncrement = (state, setState) => {
    if (state < 60) {
      setState(state + 1);
    }
  };
  const handleDecrement = (state, setState) => {
    if (state > 1) {
      setState(state - 1);
    }
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
        <Timer initialDuration={sessionDuration} />
        <Controls />
      </div>
    </div>
  );
}

export default App;
