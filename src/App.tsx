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
  points: 0,
  totalPoints: 0,
  highScore: 0,
} as IState;

const reducer = (state: IState, action: ActionType): IState => {
  switch (action.type) {
    case EActionType.dataFetchSuccess:
      return {
        ...state,
        questions: action.payload.data,
        status: EStatus.success,
        totalPoints: action.payload.totalPoints,
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
      const currentQuestion = state.questions[state.index];
      const isCorrect = action.payload === currentQuestion.correctOption;
      const updatedPoints = isCorrect
        ? state.points + currentQuestion.points
        : state.points;
      return {
        ...state,
        clickedAnswer: action.payload,
        points: updatedPoints,
      };
    case EActionType.nextQuestion:
      const nextIndex = state.index + 1;
      return {
        ...state,
        index: nextIndex,
        clickedAnswer: null,
      };
    case EActionType.finishQuiz:
      return {
        ...state,
        status: EStatus.finished,
        highScore: Math.max(state.highScore, state.points),
      };
    case EActionType.resetQuiz:
      return {
        ...state,
        status: EStatus.active,
        index: 0,
        clickedAnswer: null,
        points: 0,
      };
    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    clickedAnswer: clickAnswer,
    points,
    totalPoints,
    highScore,
  } = state;

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const totalPoints = data.reduce(
        (acc: number, question: IQuestions) => acc + question.points,
        0
      );
      dispatch({
        type: EActionType.dataFetchSuccess,
        payload: { data, totalPoints },
      });
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
        points={points}
        totalPoints={totalPoints}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
