import { useEffect, useState } from "react";
import "./Sabad-kharid.css";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const ser = localStorage.getItem("value");
    if (ser) {
      const localValue = JSON.parse(ser);
      setValue(localValue);
    }
  }, []);

  const minus = () => {
    const newValue = value - 1;
    setValue(newValue);
    localStorage.setItem("value", JSON.stringify(newValue));
  };

  const reset = () => {
    const zeroCount = 0;
    setValue(zeroCount);
    localStorage.setItem("value", JSON.stringify(zeroCount));
  };

  const plus = () => {
    if (value < 5) {
      const newValue = value + 1;
      setValue(newValue);
      localStorage.setItem("value", JSON.stringify(newValue));
    }
  };
  console.log("value", value);

  return (
    <div>
      <div className="container">
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
