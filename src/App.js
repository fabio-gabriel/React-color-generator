import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import ColorsHistory from "./components/ColorsHistory"
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="panel">
          <Card />
          <ActionButton />
          <ColorsHistory />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
