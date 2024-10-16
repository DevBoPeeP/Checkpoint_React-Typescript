import React from "react";
import Counter from "./components/Counter";
import Greeting from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <Greeting name="zee" />
      <Counter />
    </div>
  );
}

export default App;
