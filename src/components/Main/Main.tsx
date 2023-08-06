import { IState } from "../../types/types";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Landing from "../Landing/Landing";

const Main = ({ questions, status }: IState) => {
  const totalQuestions = questions.length;
  return (
    <main className="w-[50rem]">
      {status === "Loading" && <Loader />}
      {status === "Error" && <Error />}
      <Landing totalQuestions={totalQuestions} />
      {/* <p>Questions</p>
      <p>1/15</p> */}
    </main>
  );
};

export default Main;
