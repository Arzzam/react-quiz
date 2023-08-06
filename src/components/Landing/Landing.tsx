interface ILandingProps {
  totalQuestions: number;
}

const Landing = ({ totalQuestions }: ILandingProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3>Welcome to the React Quiz!</h3>
      <h3>{totalQuestions} questions to test your React mastery</h3>
      <button>Let's Start</button>
    </div>
  );
};

export default Landing;
