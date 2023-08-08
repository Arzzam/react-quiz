import { EActionType, IDispatch } from "../../types/types";
import Button from "../Button/Button";

interface ILandingProps {
  totalQuestions: number;
  dispatch: React.Dispatch<IDispatch> | (() => void);
}

const Landing = ({ totalQuestions, dispatch }: ILandingProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3>Welcome to the React Quiz!</h3>
      <h3>{totalQuestions} questions to test your React mastery</h3>
      <Button
        className="float-right"
        onClick={() => {
          dispatch({ type: EActionType.startQuiz });
        }}
      >
        Let's Start
      </Button>
    </div>
  );
};

export default Landing;
