import { IQuestionsProps } from "../../types/types";
import Options from "./Options";

const Questions = ({ questions, clickedAnswer, dispatch }: IQuestionsProps) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options
        questions={questions}
        clickedAnswer={clickedAnswer}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Questions;
