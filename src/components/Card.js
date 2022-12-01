import '../../src/styles/Card.css'

function Card({styling, color}) {
  return (
    <div className="Card" style={styling}>
      <div>
        <p>{color}</p>
      </div>
    </div>
  )
}

export default Card