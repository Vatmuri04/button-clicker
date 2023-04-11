import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 0;
  });

  const [buttonColor, setButtonColor] = useState('blue');
  
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
    const colors = ['red', 'green', 'yellow', 'purple', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <p>Counter value: {count}</p>
        <button style={{ backgroundColor: buttonColor }} onClick={handleIncrement}>Click me!</button>      </div>
    </div>
  );
}

export default App;
