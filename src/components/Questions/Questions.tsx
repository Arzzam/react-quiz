import { IQuestions } from "../../types/types";

interface IQuestionsProps {
  questions: IQuestions;
}

const Questions = ({ questions }: IQuestionsProps) => {
  return <div>Questions</div>;
};

export default Questions;
