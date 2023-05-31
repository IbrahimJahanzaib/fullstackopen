import { useState } from 'react'

const Button = ({handler, text}) => {
  return(
    <button onClick={handler}>
      {text}
    </button>
  )
  
}

const Heading = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Anecdote = ({text, value}) => {
  return(
    <div>
      <p>{text}</p>
      <p>has {value} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const random = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const voteHandler = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  return (
    <div>
      <Heading text={'Anecdote of the day'}/>
      <Anecdote text={anecdotes[selected]} value={vote[selected]}/>
      <Button handler={voteHandler} text={'vote'}/>
      <Button handler={random} text={'next anecdote'}/>
      <Heading text={'Anecdote with most votes'}/>
      <Anecdote text={anecdotes[vote.indexOf(Math.max(...vote))]} value={Math.max(...vote)}/>
    </div>
  )
}

export default App
