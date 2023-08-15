import Button from "../Button/Button";
import { EActionType, IQuestionsProps } from "../../types/types";

const Options = ({ questions, clickedAnswer, dispatch }: IQuestionsProps) => {
  const hasAnswered = clickedAnswer !== null;
  function handleCheckAnswer(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number
  ): void {
    event.preventDefault();
    dispatch({ type: EActionType.answerQuestion, payload: idx });
  }

  return (
    <div className="flex flex-col gap-5 mb-12">
      {questions.options.map((option, idx) => (
        <Button
          key={option}
          className={`w-full text-left btn-option ${
            idx === clickedAnswer ? "translate-x-8" : ""
          }`}
          correct={hasAnswered && idx === questions.correctOption}
          wrong={hasAnswered && idx !== questions.correctOption}
          disabled={hasAnswered}
          onClick={(event) => handleCheckAnswer(event, idx)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Options;
