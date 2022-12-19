import "./App.css";
import {
  WrapperActionButton,
  WrapperCard,
  WrapperColorsHistory,
} from "./components/HandleColorChange";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  return (
    <Provider store={store}>
      <Header />
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
