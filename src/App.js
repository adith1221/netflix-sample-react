import './App.css'
function App() {
  const data='adith'
  return (
    <div>
      <h1 className='people'>hello</h1>
      <p> this is {data} </p>
      <br></br>
      <Hello/>
    </div>
    
  );
}

export default App;

function Hello()
{
  return(
    <h1 className='hello'>hello this is another text</h1>
  )
}