import { EStatus, IState } from "../../types/types";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Landing from "../Landing/Landing";
import Questions from "../Questions/Questions";

const Main = ({
  questions,
  status,
  dispatch,
  index,
  clickedAnswer,
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
        <Questions
          questions={questions[index]}
          clickedAnswer={clickedAnswer}
          dispatch={dispatch}
        />
      )}
    </main>
  );
};

export default Main;
