import { EStatus, IState } from "../../types/types";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Landing from "../Landing/Landing";
import Questions from "../Questions/Questions";
import NextButton from "../Button/NextButton";
import Progress from "../Progress/Progress";
import FinishedScreen from "../Finished/FinishedScreen";

const Main = ({
  questions,
  status,
  dispatch,
  index,
  clickedAnswer,
  points,
  totalPoints,
  highScore,
}: IState) => {
  const totalQuestions = questions.length;
  return (
    <main className="w-[50rem]">
      {status === EStatus.loading && <Loader />}
      {status === EStatus.error && <Error />}
      {status === EStatus.success && (
        <Landing totalQuestions={totalQuestions} dispatch={dispatch} />
      )}
      {status === EStatus.active && (
        <>
          <Progress
            index={index}
            questionLength={totalQuestions}
            points={points}
            totalPoints={totalPoints}
            clickAnswer={clickedAnswer}
          />
          <Questions
            questions={questions[index]}
            clickedAnswer={clickedAnswer}
            dispatch={dispatch}
          />
          <NextButton
            clickedAnswer={clickedAnswer}
            dispatch={dispatch}
            totalQuestions={totalQuestions}
            index={index}
          />
        </>
      )}

      {status === EStatus.finished && (
        <FinishedScreen
          totalPoints={totalPoints}
          points={points}
          highScore={highScore}
          dispatch={dispatch}
        />
      )}
    </main>
  );
};

export default Main;
