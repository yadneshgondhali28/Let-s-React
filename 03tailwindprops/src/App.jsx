// import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  // const [count, setCount] = useState(0);
  const myObj = {
    interest: "Full-Stack-Web-dev",
    age: 20,
  };

  const newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card btnText="see profile" />
      <Card userName="Hitesh" />
    </>
  );
}

export default App;
