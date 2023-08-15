import { EActionType } from "../../types/types";
import Button from "./Button";
import { INextButtonProps } from "./buttonTypes";

const NextButton = ({ dispatch, clickedAnswer }: INextButtonProps) => {
  if (clickedAnswer === null) {
    return null;
  }
  function handleNextQuestion(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    dispatch({ type: EActionType.nextQuestion });
  }

  return (
    <>
      <Button className="float-right" onClick={handleNextQuestion}>
        Next
      </Button>
    </>
  );
};

export default NextButton;
