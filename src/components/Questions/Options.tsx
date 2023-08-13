import Button from "../Button/Button";
import { EActionType, IQuestionsProps } from "../../types/types";

const Options = ({ questions, clickedAnswer, dispatch }: IQuestionsProps) => {
  const correctClass =
    "bg-color-theme border-2 border-color-theme text-color-light";
  const wrongClass =
    "bg-color-accent border-2 border-color-accent text-color-darkest";
  function handleCheckAnswer(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idx: number
  ): void {
    event.preventDefault();
    dispatch({ type: EActionType.answerQuestion, payload: idx });
    console.log(idx);
    console.log(questions.correctOption);
  }

  return (
    <div className="flex flex-col gap-5 mb-12">
      {questions.options.map((option, idx) => (
        <Button
          key={option}
          className={`btn-option ${
            idx === clickedAnswer ? "translate-x-8" : ""
          } ${idx === questions.correctOption ? correctClass : wrongClass}`}
          onClick={(event) => handleCheckAnswer(event, idx)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default Options;
