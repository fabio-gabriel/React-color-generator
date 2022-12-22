import "./App.css";
import Card from "./components/Card.js";
import ActionButton from "./components/ActionButton.js";
import Header from "./components/Header";
import ColorsHistory from "./components/ColorsHistory";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="App">
        <div className="panel">
          <Card />
          <ActionButton />
        </div>
        <div className="colors-list">
          <ColorsHistory />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
