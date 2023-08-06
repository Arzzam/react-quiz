import { ChangeEvent, useReducer } from "react";

interface CountState {
  count: number;
  step: number;
}

interface CountAction {
  type: "inc" | "dec" | "setCount" | "setStep" | "reset";
  payload: number;
}

function reducer(state: CountState, action: CountAction) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
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
    dispatch({ type: "reset", payload: 0 });
  };

  return (
    <div className="flex flex-col items-center gap-4 text-3xl font-bold m-24 font">
      <div className="p-3">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div className="p-3">
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p className="p-3">{date.toDateString()}</p>

      <div className="p-3">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
