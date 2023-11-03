import './App.css';
import React, { useState } from 'react'
function App() {
  const [generaterandom, setGenerateRandom] = useState(0)

  const handleGenerate = () => {
    let generatebutton = Math.floor(Math.random() * 101);
    setGenerateRandom(generatebutton)
  }

  return (
    <div className="randomContainer">
      <div className="randomparent">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button onClick={handleGenerate}>Generate</button>
       <span className='number'>{generaterandom}</span>
      </div>

    </div>
  );
}

export default App;
