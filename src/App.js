import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import Header from "./components/Header";
import ColorsHistory from "./components/ColorsHistory";
import ColorContext from "./contexts/ColorContext";
import LoginContext from "./contexts/LoginContext";

function App() {
  return (
    <ColorContext>
      <LoginContext>
        <Header />
      </LoginContext>
      <div className="App">
        <div className="panel">
          <Card />
          <ActionButton />
        </div>
        <div className="colors-list">
          <ColorsHistory />
        </div>
      </div>
    </ColorContext>
  );
}

export default App;
