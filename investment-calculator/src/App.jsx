import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    'initialInvestment': 10000,
    'annualInvestment': 1200,
    'expectedReturn': 6,
    'duration': 10,
  });

  function handleChange(inputId, value) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputId]: +value,
    }));
  }

  const inputIsValid = userInput.duration >= 0;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid ? <ResultsTable input={userInput} /> : <p className="center">Please enter a valid duration greater than 0.</p>}

    </>
  )
}

export default App
