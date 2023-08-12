export interface IQuestions {
  question: string;
  options: string[];
  correct_answer: string;
  points: number;
}

export interface IState {
  questions: IQuestions[];
  status?: string;
  dispatch?: React.Dispatch<IDispatch> | any;
  index?: number | any;
}

export interface IDispatch {
  type: EActionType;
  payload?: any;
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
}

export type ActionType = {
  type: EActionType;
  payload?: any;
};
