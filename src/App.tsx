import { useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
  ActionType,
  EActionType,
  EStatus,
  IQuestions,
  IState,
} from "./types/types";

const API_URL = process.env.REACT_APP_URL || "";

const initialState = {
  questions: [] as IQuestions[],
  status: EStatus.loading, //Loading, Success, Error, active, finished
  index: 0,
  clickedAnswer: null,
} as IState;

const reducer = (state: IState, action: ActionType): IState => {
  switch (action.type) {
    case EActionType.dataFetchSuccess:
      return {
        ...state,
        questions: action.payload,
        status: EStatus.success,
      };
    case EActionType.dataFetchError:
      return {
        ...state,
        status: EStatus.error,
      };
    case EActionType.startQuiz:
      return {
        ...state,
        status: EStatus.active,
      };
    case EActionType.answerQuestion:
      return {
        ...state,
        clickedAnswer: action.payload,
      };
    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, clickedAnswer: clickAnswer } = state;

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: EActionType.dataFetchSuccess, payload: data });
    } catch (error) {
      dispatch({ type: EActionType.dataFetchError });
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Main
        questions={questions}
        status={status}
        dispatch={dispatch}
        index={index}
        clickedAnswer={clickAnswer}
      />
    </div>
  );
}

export default App;
