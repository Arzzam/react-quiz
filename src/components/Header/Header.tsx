import ReactIcon from "../../assets/ReeactIcon";

function Header() {
  return (
    <header className="w-[66rem] flex items-center justify-between mb-16">
      <ReactIcon className="w-56" />
      <h1>The React Quiz</h1>
    </header>
  );
}

export default Header;
