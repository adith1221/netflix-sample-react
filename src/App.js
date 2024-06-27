import {useState} from 'react'
function App() {
  const [count,setcount] =useState(0)
  const Count=()=>
  {
    setcount(count+1)
    console.log(count);
  }
  return(
    <div className="aiii">
      <button onClick={Count}>click me</button>
      <h1>count is {count}</h1>
    </div>
  );
}

export default App;