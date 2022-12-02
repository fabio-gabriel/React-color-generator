import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import { useState, useRef } from "react";

function App() {
  const call = useRef(null)

  return (
    <div className="App">
      <div className="panel">
        <Card ref={call} />
        <ActionButton callCard = {() => call.current.} />
      </div>
    </div>
  );
}

export default App;
