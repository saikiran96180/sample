import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />

      <div className="buttons">
        <button className="btn" name="1" onClick={handleClick}>
          1
        </button>
        <button className="btn" name="2" onClick={handleClick}>
          2
        </button>
        <button className="btn" name="3" onClick={handleClick}>
          3
        </button>
        <button className="btn" name="+" onClick={handleClick}>
          +
        </button>
        <button className="btn" name="4" onClick={handleClick}>
          4
        </button>
        <button className="btn" name="5" onClick={handleClick}>
          5
        </button>
        <button className="btn" name="6" onClick={handleClick}>
          6
        </button>
        <button className="btn" name="-" onClick={handleClick}>
          -
        </button>
        <button className="btn" name="7" onClick={handleClick}>
          7
        </button>
        <button className="btn" name="8" onClick={handleClick}>
          8
        </button>
        <button className="btn" name="9" onClick={handleClick}>
          9
        </button>
        <button className="btn" name="*" onClick={handleClick}>
          *
        </button>
        <button className="btn" name="0" onClick={handleClick}>
          0
        </button>
        <button className="btn" name="/" onClick={handleClick}>
          /
        </button>
        <button className="btn" onClick={clear}>
          Clear
        </button>
        <button className="btn" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
