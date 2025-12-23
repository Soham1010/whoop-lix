import { useState, useEffect } from 'react';

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(() => {
    console.log("Card rendered");
  }, [])

  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>{title}<br/>{count}</h2>

      <button onClick={(e) => {setHasLiked(!hasLiked);}}>
        {hasLiked ? 'Liked ❤️' : 'Like 🤍'}
      </button>
    </div>
    );
};

// Old function
export default function App() {
    const title = ['Avatar', 'The life of Pi', 'The Rock']
    return (
        <div>
            {/* {} Means render STH */}
            {title.map(t => <Card title={t} />)}
        </div>
    );
}

{/* export default Card; */}
