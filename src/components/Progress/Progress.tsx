interface IProgressProps {
  index: number;
  questionLength: number;
  points: number;
  totalPoints: number;
  clickAnswer?: number | null;
}

const Progress = ({
  index,
  questionLength,
  points,
  totalPoints,
  clickAnswer,
}: IProgressProps) => {
  return (
    <header className="mb-16 grid justify-between gap-5 grid-cols-2 text-2xl text-color-medium">
      <progress
        className="w-full h-3 grid col-span-full"
        max={questionLength}
        value={index + Number(clickAnswer !== null)}
      />
      <p className="text-left">
        Question <strong>{index + 1}</strong>/ {questionLength}
      </p>
      <p className="text-right">
        <strong>{points}</strong> / {totalPoints} Points
      </p>
    </header>
  );
};

export default Progress;
