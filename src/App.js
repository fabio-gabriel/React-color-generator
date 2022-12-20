import "./App.css";
import ActionButton from "./components/ActionButton";
import Card from "./components/Card";
import ColorsHistory from "./components/ColorsHistory";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
