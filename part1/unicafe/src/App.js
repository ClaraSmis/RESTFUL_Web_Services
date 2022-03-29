import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Headers = props =>  <>  <h1>{props.text}</h1>  </>
  
  
const Statistics = (props) => {
  if((props.counterg==0) && (props.countern==0) && (props.counterb==0))
  {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticLine name = {props.nameg} counter = {props.counterg} />
      <StatisticLine name = {props.namen} counter = {props.countern} />
      <StatisticLine name = {props.nameb} counter = {props.counterb}/>
      <StatisticLine name = {props.namet} counter = {props.countert}/>
      <StatisticLine name = {props.namea} counter = {props.countera}/>
      <StatisticLine name = {props.namep} counter = {props.counterp}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({name, counter}) => <><tr><td>{name}</td><td>{counter}</td></tr></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [percent, setPercent] = useState(0)
  const feedback = 'Give feedback'
  const statistics = 'statistics'
  const namegood = 'good'
  const nameneutral = 'neutral'
  const namebad = 'bad'
  const total = 'all'
  const nameaverage = 'average'
  const percentage = 'positive'
  
 const handleGoodClick = () => {

  setGood(good + 1)
  setAll(all + 1)
  setAverage(((good+1)-bad)/(all+1))
  setPercent(((good+1)/(all+1))*100)
 }

 const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  setAll(all+1)
  setAverage((good-bad)/(all+1))
  setPercent(((good)/(all+1))*100)
 }

 const handleBadClick = () => {
  setBad(bad + 1)
  setAll(all+1)
  setAverage((good - (bad+1))/(all+1))
  setPercent(((good)/(all+1))*100)
 }




  return (
    <div>
      <Headers text = {feedback}/>
      <Button handleClick={handleGoodClick} text = {namegood} />
      <Button handleClick={handleNeutralClick} text = {nameneutral}/>
      <Button handleClick={handleBadClick} text = {namebad}/>
      <Headers text = {statistics}/>
      <Statistics nameg = {namegood} counterg = {good} namen = {nameneutral} countern = {neutral} nameb = {namebad} counterb = {bad} namet = {total} countert = {all} namea = {nameaverage} countera = {average} namep = {percentage} counterp = {percent} />
    </div>
  )
}

export default App
