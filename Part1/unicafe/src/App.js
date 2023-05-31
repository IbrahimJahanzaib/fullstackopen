import { useState } from "react"

const Button = ({eventHandler, text}) => {
  return (
      <button onClick={eventHandler}>
        {text}
      </button>
  )
}

const Statistics = ({good, neutral, bad, all, avg, pos}) => {
  if(all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <Statisticsline text={'good'} value={good}/>
        <Statisticsline text={'neutral'} value={neutral}/>
        <Statisticsline text={'bad'} value={bad}/>
        <Statisticsline text={'all'} value={all}/>
        <Statisticsline text={'average'} value={avg}/>
        <Statisticsline text={'positive'} value={pos + ' %'}/>
      </div>
    )
  }
}

const Statisticsline = ({text, value}) => {
  return(
    <table>
      <tbody>
      <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
        
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addOneGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }
  const addOneNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const addOneBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  let average = (good - bad)/all
  let positivePercentage = (good/all)*100

  return(
    <div>
      <h1>Give Feedback</h1>
      <Button eventHandler={addOneGood} text={'good'}/>
      <Button eventHandler={addOneNeutral} text={'neutral'}/>
      <Button eventHandler={addOneBad} text={'bad'}/>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={average} pos={positivePercentage}/>
    </div>
  )
}

export default App