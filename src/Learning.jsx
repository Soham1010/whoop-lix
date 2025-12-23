import { useState, useEffect } from "react"

// React Components
const Card = ({ title }) => {
  const [count, setCount] = useState(initialState: 0);
  const [hasLiked, sethasLiked] = useState(initialState: 0);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setCount}>Like</button>

    </div>
  )
}

// React App Component.
const App = () => {

  return (
    <div className="card-container"> 
      <h2>Functional Arrow Component</h2>
      <Card className="card" title="Star Wars" rating={5} isCool={true} actors={[]}></Card>
      <Card className="card" title="The lion King"></Card>
      <Card className="card" title="Avatar"></Card>
      
    </div>
  )
}

// use = Hooks
const Avatar = () => {

  return (
  <div>
    <h2>Functional Arrow Component</h2>
      <Card className="card" title="Star Wars" rating={5} istrue={true} actors={[]}></Card>
  </div>
  )
}
export default App
