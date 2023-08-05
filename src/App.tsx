import { useEffect, useReducer, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const API_URL = process.env.REACT_APP_URL || "";

const initialState = {
  questions: [],
  status: "Loading", //Loading, Success, Error, active, finished
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        questions: action.payload,
        status: "Success",
      };
    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "DATA_FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Main data={[]} />
    </div>
  );
}

export default App;
