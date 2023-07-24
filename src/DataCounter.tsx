import { ChangeEvent, useReducer } from "react";

interface CountState {
  count: number;
  step: number;
}

interface CountAction {
  type: "inc" | "dec" | "setCount" | "setStep";
  payload: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };
    case "dec":
      return { ...state, count: state.count - action.payload };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const inc = function () {
    dispatch({ type: "inc", payload: step });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const dec = function () {
    dispatch({ type: "dec", payload: step });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // dispatch({ type: "setCount", payload: 0 });
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
