import{useState} from 'react'
function App() {
  const [count,setcount]=useState(0)
  const Counter=()=>{
    
    console.log(count)
  }

  return(
<div className="counter">
  <button onClick={Counter}>clicke me</button>
  <h1>count is{count}</h1>
</div>
  );
}

export default App;