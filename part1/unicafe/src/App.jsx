import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text === 'Positive') {
    return (
      <>
        <td>{props.text}</td>
        <td>{props.value} {props.unit}</td>
      </>
    )
  }

  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback yet</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="Good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="Neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="Bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="Total" value={good + neutral + bad} />
        </tr>
        <tr>
          <StatisticLine text="Average" value={(good - bad)/ (good + neutral + bad)} />
        </tr>
        <tr>
          <StatisticLine text="Positive" value={(good / (good + neutral + bad)) * 100} unit="%" />
        </tr>
      </tbody>
    </table>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
      <h1>Give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <h1>Statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  )
}

export default App