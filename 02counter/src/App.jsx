import { useState } from "react";
function App() {
  //
  let [count, setCount] = useState(0);

  class Counter {
    constructor() {
      this.incrementCounter = function () {
        if (count < 20) {
          setCount(count + 1);
          // setCount((prevCounter) => prevCounter + 1);
          // setCount((prevCounter) => prevCounter + 1);
          // setCount((prevCounter) => prevCounter + 1);
          // setCount((prevCounter) => prevCounter + 1);
        }
      };
      this.decrementCounter = function () {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    }
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
