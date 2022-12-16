import "./App.css";
import {
  WrapperActionButton,
  WrapperCard,
} from "./components/HandleColorChange";
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
      </div>
    </Provider>
  );
}

export default App;
