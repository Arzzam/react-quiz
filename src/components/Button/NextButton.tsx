import { EActionType } from "../../types/types";
import Button from "./Button";
import { INextButtonProps } from "./buttonTypes";

const NextButton = ({
  dispatch,
  clickedAnswer,
  index,
  totalQuestions,
}: INextButtonProps) => {
  if (clickedAnswer === null) {
    return null;
  }
  function handleNextQuestion(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    if (index === totalQuestions - 1) {
      dispatch({ type: EActionType.finishQuiz });
      return;
    }
    dispatch({ type: EActionType.nextQuestion });
  }

  return (
    <>
      <Button className="float-right" onClick={handleNextQuestion}>
        {index === totalQuestions - 1 ? "Finish" : "Next"}
      </Button>
    </>
  );
};

export default NextButton;
