import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 20000,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue // Ensure value is converted to a number
    }));
  }

  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p>Please enter a duration greater than 0</p>}
      {inputIsValid && <Results input={userInput} />}
    </div>
  );
}

export default App;
