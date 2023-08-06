export interface IQuestions {
  question: string;
  options: string[];
  correct_answer: string;
  points: number;
}

export interface IState {
  questions: IQuestions[];
  status: string;
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
}

export type ActionType = {
  type: EActionType;
  payload?: any;
};
