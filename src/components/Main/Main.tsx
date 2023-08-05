interface IMainProps {
  data: [];
}

const Main = ({ data }: IMainProps) => {
  return (
    <main className="w-[50rem]">
      <p>Questions</p>
      <p>1/15</p>
    </main>
  );
};

export default Main;
