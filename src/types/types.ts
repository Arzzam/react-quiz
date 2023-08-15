export interface IQuestions {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface IState {
  questions: IQuestions[];
  status: string;
  dispatch: React.Dispatch<IDispatch>;
  index: number;
  clickedAnswer: number | null;
  points: number;
  totalPoints: number;
}

export interface IDispatch {
  type: EActionType;
  payload?: any;
}

export interface IQuestionsProps {
  questions: IQuestions;
  clickedAnswer: number | null;
  dispatch: React.Dispatch<IDispatch>;
}

export enum EStatus {
  loading = "Loading",
  success = "Success",
  error = "Error",
  active = "Active",
  finished = "Finished",
}

export enum EActionType {
  dataFetchSuccess = "DATA_FETCH_SUCCESS",
  dataFetchError = "DATA_FETCH_ERROR",
  startQuiz = "START_QUIZ",
  answerQuestion = "ANSWER_QUESTION",
  nextQuestion = "NEXT_QUESTION",
}

export type ActionType = {
  type: EActionType;
  payload?: any;
};
