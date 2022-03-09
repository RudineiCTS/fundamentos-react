import {useState} from 'react';

export function Counter(){
  const [counter, setCounter] = useState();

  function incrementCounter(){
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>increment</button>
    </div>
  )
}