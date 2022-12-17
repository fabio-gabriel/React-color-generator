import "./App.css";
import {
  WrapperActionButton,
  WrapperCard,
  WrapperColorsHistory,
} from "./components/HandleColorChange";
import ColorsHistory from "./components/ColorsHistory";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="panel">
          <WrapperCard />
          <WrapperActionButton />
        </div>
        <div className="colors-list">
          <WrapperColorsHistory />
        </div>
      </div>
    </Provider>
  );
}

export default App;
