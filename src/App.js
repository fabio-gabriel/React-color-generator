import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import ColorPanel from "./components/MainPanel/ColorPanel";

function App() {
  const [, forceRender] = useState();

  return (
    <div>
      <Header />
      <button onClick={() => forceRender({})}> hello </button>
      <div className="App">
        <ColorPanel />
      </div>
    </div>
  );
}

export default App;
