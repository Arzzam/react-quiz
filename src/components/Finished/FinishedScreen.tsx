import { EActionType, IDispatch } from "../../types/types";
import Button from "../Button/Button";

interface IFinishedScreenProps {
  points: number;
  totalPoints: number;
  highScore: number;
  dispatch: React.Dispatch<IDispatch>;
}

const FinishedScreen = ({
  points,
  totalPoints,
  highScore,
  dispatch,
}: IFinishedScreenProps) => {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥳";
  if (percentage < 100 && percentage >= 80) emoji = "😎";
  if (percentage < 80 && percentage >= 60) emoji = "😊";
  if (percentage < 60 && percentage >= 40) emoji = "😐";
  if (percentage < 40 && percentage >= 20) emoji = "😕";
  if (percentage < 20 && percentage >= 10) emoji = "😢";
  if (percentage < 10 && percentage >= 0) emoji = "😭";

  function handleRestart(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    dispatch({ type: EActionType.resetQuiz });
  }

  return (
    <>
      <p className="bg-color-theme text-color-light rounded-[100px] text-center py-8 px-0 text-3xl font-medium mb-6   ">
        <span className="text-4xl mr-1">{emoji}</span>
        Your Score is <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}% )
      </p>
      <p className="text-2xl text-center mb-20">
        (HighScore : <strong>{highScore} </strong> Points)
      </p>
      <Button className="float-right" onClick={handleRestart}>
        Restart Quiz <span className="text-2xl ml-2">🔄</span>
      </Button>
    </>
  );
};

export default FinishedScreen;
