import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ value }) => {
  const [good, neutral, bad] = value
  const total = good + neutral + bad
  const average = total === 0 ? 0 : ((good - bad) / total).toFixed(1)
  const positive = total === 0 ? "0%" : `${((good / total) * 100).toFixed(1)}%`
  const stats = [
    { text: "Good", value: good },
    { text: "Neutral", value: neutral },
    { text: "Bad", value: bad },
    { text: "All", value: total },
    { text: "Average", value: average },
    { text: "Positive", value: positive },
  ]
  return (
    <table>
      <tbody>
        {stats.map((stat, index) => (
          <StatisticLine key={index} text={stat.text} value={stat.value} />
        ))}
      </tbody >
    </table>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => {
    console.log('increasing, value before', good)
    setGood(good + 1)
  }

  const increaseNeutral = () => {
    console.log('increasing, value before', neutral)
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {
    console.log('increasing, value before', bad)
    setBad(bad + 1)
  }

  let totalFeedback = good + bad + neutral

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      {totalFeedback > 0 ? (
        <div id="show" >
          <Statistics value={[good, neutral, bad]} />
        </div>) : (
        <p>No feedback given </p>
      )
      }
    </>
  )
}

export default App