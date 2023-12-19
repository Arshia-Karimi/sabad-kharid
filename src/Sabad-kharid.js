import { useState } from "react";
import "./Sabad-kharid.css";

const App = () => {
  const [value, setValue] = useState(0);

  const plus = () => {
    setValue(value + 1);
  };

  const negative = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <div class="container">
        <p class="p11s">{value}</p>
        <button class="button11" onClick={negative}>
          -
        </button>
        <button class="button12" onClick={reset}>
          reset
        </button>
        <button class="button13" onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
