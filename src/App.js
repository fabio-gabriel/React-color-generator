import './App.css';
import Header from './components/Header.js'
import Card from './components/Card.js'
import ActionButton from './components/ActionButton.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='panel'>
        <Card />
        <ActionButton />
      </div>
    </div>
  );
}

export default App;
