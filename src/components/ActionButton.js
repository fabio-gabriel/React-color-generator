import '../../src/styles/ActionButton.css'

function ActionButton({generateHexColor}) {

  return (
    <div className='ActionButton'>
      <h3>Click on the button to generate a new random color!</h3>
      <button onClick={generateHexColor}>
        Heloo
      </button>
    </div>
  )
}

export default ActionButton