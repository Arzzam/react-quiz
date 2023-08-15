import { IDispatch } from "../../types/types";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  correct?: boolean;
  wrong?: boolean;
}

export interface IStyledButtonProps extends IButtonProps {
  correct: boolean;
  wrong: boolean;
}

export interface INextButtonProps extends IButtonProps {
  dispatch: React.Dispatch<IDispatch>;
  clickedAnswer: number | null;
  index: number;
  totalQuestions: number;
}
