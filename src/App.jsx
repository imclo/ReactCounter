import { useState } from "react";
import "./App.css";

import calculette from "./assets/calculette.png";
import minus from "./assets/minus-icon.png";
import plus from "./assets/plus-icon.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <img src={calculette} alt="calculator" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div>
          {count > 0 && (
            <button
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <img className="minus" src={minus} alt="minus" />
            </button>
          )}
          <p>{count}</p>
          {count < 10 && (
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <img className="plus" src={plus} alt="plus" />
            </button>
          )}
        </div>
        <div className="reset">
          <button
            className="button2"
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Chloé</span>
      </footer>
    </>
  );
}

export default App;
