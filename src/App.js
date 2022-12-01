import './App.css';
import Header from './components/Header.js'
import Card from './components/Card.js'
import ActionButton from './components/ActionButton.js'
import {useState} from "react"

function App() {
  const [color, setColor] = useState('#FFFFFF')

  const generateHexColor = () => {
    let string = '1234567890abcdef'
    let newColor = ''

    for (let i = 0; i < 6; i++) {
      newColor += string[Math.floor(Math.random() * string.length)];
    }

    setColor('#' + newColor)
  }

  const changeColor = () => {
    let styling = {
      backgroundColor: color,
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='panel'>
        <Card color={color} />
        <ActionButton generateHexColor={generateHexColor} />
      </div>
    </div>
  );
}

export default App;
