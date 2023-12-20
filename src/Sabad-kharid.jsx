import { useState } from "react";
import "./Sabad-kharid.css";

const App = () => {
  const [value, setValue] = useState(0);

  const minus = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  const plus = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  return (
    <div>
      <div class="container">
        <p class="p11s">{value}</p>
        <button
          className={`button11 ${value ? undefined : "hidden"}`}
          onClick={minus}
        >
          -
        </button>
        <button
          className={`button12 ${value ? undefined : "hidden"}`}
          onClick={reset}
        >
          reset
        </button>
        <button className="button13" onClick={plus}>
          +
        </button>
        {value === 5 ? <p>حداکثر</p> : null}
      </div>
    </div>
  );
};

export default App;
