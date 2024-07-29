import { useState } from "react";
function App() {
  //
  let [count, setCount] = useState(0);

  function Counter() {
    this.incrementCounter = function () {
      let counter = count + 1;
      if (counter <= 20) {
        setCount(counter);
      }
    };
    this.decrementCounter = function () {
      let counter = count - 1;
      if (counter >= 0) {
        setCount(counter);
      }
    };
  }

  let counter = new Counter();

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter: {count}</p>
      <button onClick={counter.incrementCounter}>Increment</button>
      <button onClick={counter.decrementCounter}>Dcrement</button>
    </>
  );
}

export default App;
