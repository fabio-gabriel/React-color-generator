import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="panel">
          <Card />
          <ActionButton />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
