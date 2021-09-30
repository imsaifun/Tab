import React, { useState } from "react";
import './App.css';

function App() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };
  return (
    <>
            <button onClick={() => handleOnClick(1)}>One</button>
            <button onClick={() => handleOnClick(2)}>Two</button>
            <button onClick={() => handleOnClick(3)}>Three</button>
            <button onClick={() => handleOnClick(4)}>Four</button>

            <p className={activeIndex === 1 ? "active" : "d-none"}> This is Text One</p>
            <p className={activeIndex === 2 ? "active" : "d-none"}> This is Text Two</p>
            <p className={activeIndex === 3 ? "active" : "d-none"}> This is Text Three</p>
            <p className={activeIndex === 4 ? "active" : "d-none"}> This is Text Four</p>
        </>
  );
}

export default App;