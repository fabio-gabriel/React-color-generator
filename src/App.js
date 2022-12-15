import "./App.css";
import ColorContainer from "./components/HandleColorChange";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ColorContainer />
      </div>
    </Provider>
  );
}

export default App;
