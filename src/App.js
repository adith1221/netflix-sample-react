function App() {
  let count=0;
  function Count()
  {
    count=count+1;
    console.log(count)
  }
  return(
    <div className="aiii">
      <button onClick={Count}>click me</button>
      <h1>count is {count}</h1>
    </div>
  );
}

export default App;

llllllll