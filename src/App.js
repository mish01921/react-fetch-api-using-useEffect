import React, {useState, useEffect } from "react"

export default function App() {

  const [catImage, setCatImage] = useState({})
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => setCatImage(data))
  },[count])
  

  const handleClick = () => {
    setCount(count +1)
  }
  
  return (
    <div className="App">
      {
        catImage.fact
      }
      <br/>

      <button onClick={handleClick}>Click me</button>

      {count}
    </div>
  );
}