import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [message, setMessage] = useState("");

  const increment = () => {
    setCount(count + 1 >= 100 ? 100 : count + 1);
    setMessage(count >= 100 ? "Value can't greater than 10" : `Current value of count is ${count}`);
  };
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <header>
        <h1>Welcome to the counter App</h1>
      </header>
      <h2>{message}</h2>
      <button onClick={increment}>Increase Counter</button>
      <button
        onClick={() => {
          setCount(count <= 0 ? 0 : count - 1);
          setMessage(count<=0? "Value can't be less than 0":`Current value of count is ${count}`);
        }}
      >
        Decrease Counter
      </button>
      <button onClick={() => {setCount(0);setMessage("")}}>Reset Counter</button>

    </div>
  );
}

export default App;
