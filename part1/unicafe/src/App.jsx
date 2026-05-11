import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback has been given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good: " value={good}></StatisticLine>
          <StatisticLine text="Neutral: " value={neutral}></StatisticLine>
          <StatisticLine text="Bad: " value={bad}></StatisticLine>
          <StatisticLine text="Total: " value={total}></StatisticLine>
          <StatisticLine
            text="Average: "
            value={((good - bad) / (good + neutral + bad)).toFixed(1)}
          ></StatisticLine>
          <StatisticLine
            text="Positive: "
            value={`${((good / (good + neutral + bad)) * 100).toFixed(1)}%`}
          ></StatisticLine>
        </tbody>
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

export default App;
