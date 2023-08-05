import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const API_URL = process.env.REACT_APP_URL || "";

function App() {
  const [questions, setQuestions] = useState([]) as any[];
  const [error, setError] = useState(null) as any;

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <Header />
      <Main data={questions} />
    </div>
  );
}

export default App;
