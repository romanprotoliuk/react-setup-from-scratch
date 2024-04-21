import React from "react";
import "./App.css";

const App = () => {
  console.log("App component is rendered");
  return (
    <div className="App">
      <header>
        <p>Hello, React!</p>
        <a
          className="button"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
