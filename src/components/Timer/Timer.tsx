import { useEffect } from "react";
import { EActionType, IDispatch } from "../../types/types";

interface ITimerProps {
  dispatch: React.Dispatch<IDispatch>;
  timeRemaining: number | null;
}

const Timer = ({ dispatch, timeRemaining }: ITimerProps) => {
  const timeRemainingInSeconds = timeRemaining || 0;
  const minutes = Math.floor(timeRemainingInSeconds / 60);
  const seconds = timeRemainingInSeconds % 60;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: EActionType.timer });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div className="float-left text-3xl text-color-medium rounded-[100px] border-2 border-solid border-color-dark py-4 px-11">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
