import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

const Display=(props)=>{
  return (
    <div>
      <h3>{props.counter}</h3>

    </div>
  )
}
const Button =(props)=>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
function App() {
  const [counter,setCounter]=useState(0)
  const now = new Date();
  const name= 'Pedro';
  const age = 10;
  const handleClick=()=>{
    console.log('clicked')
  }
  const increaseByOne=()=>setCounter(counter+1);
  const setZero=()=>setCounter(0);
  const decreaseByOne=()=>setCounter(counter-1)
 
  const [clicks,setClicks]=useState({
    left:0,right:0
  })
  const [allClicks,setAll]=useState([])
  const handleLeftClick=()=>{
    allClicks.push('L')
    setAll(allClicks)
    setClicks({...clicks,left:clicks.left+1})
  }
  const handleRightClick=()=>{
    allClicks.push('R')
    setAll(allClicks)
    setClicks({...clicks,right:clicks.right+1})
  }
  const [good, setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  
  const handleGoodClick=()=>{
    setGood(good+1)
  }
  const handleNeutralClick=()=>{
    setNeutral(neutral+1)
  }
  const handleBadClick=()=>{
    setBad(bad+1)
  }
  const [selected,setSelected]=useState(0)
  const points={0:1,1:3,2:4,3:2,4:4}
  const copy = {...points}
  const anecdota=[
    'Hoy soñe con la nueva plaza',
    'Agregue una letra mal en mi custmo',
    'no tiene todo lo de hoy',
    'Estoy flipando con daft punk',
    'LA mejor pelicula de scorsese es el lobo de wall streed'
  ]
  const handleVote= ()=>{
    copy[selected]+=1;
  }
  if (selected>=anecdota.length)
    setSelected(0)
  return (
   <>
     {anecdota[selected]}<br/>
     <button onClick={handleVote}>vote</button>
     <button onClick={()=>setSelected(selected+1)}>next anecdota</button>
     <p>has {copy[selected]} votes</p>
     <h1>give feedback</h1>
     <button onClick={handleGoodClick}>good</button>
     <button onClick={handleNeutralClick}>neutral</button>
     <button onClick={handleBadClick}>bad</button>
     <p>good {good}</p>
     <p>neutral {neutral}</p>
     <p>bad {bad}</p>
     <p>all {bad+neutral+good}</p>
     <p>average {(bad+neutral+good)/3}</p>
     <p>positive {(good/(bad+neutral+good))*100}%</p>
      {clicks.left}
     <button onClick={handleLeftClick}>left</button>
     <button onClick={handleRightClick}>right</button>
     {clicks.right}
     <p>{allClicks.join(' ')}</p>
      <h1>Greetings</h1>
     <Display counter={counter}/>
     <Button handleClick={increaseByOne} text='plus'/>
     <Button handleClick={setZero} text='zero'/>
     <Button handleClick={decreaseByOne} text='minus'/>
     <Header name={name}/>
     <Content date={now.toString()}/>
     <Footer age={age}/>
   </>
 );     
}

export default App;
