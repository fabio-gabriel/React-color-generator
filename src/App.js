import "./App.css";
import Container from "./components/Container.js";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="panel">
          <Container />
        </div>
      </div>
    </Provider>
  );
}

export default App;
