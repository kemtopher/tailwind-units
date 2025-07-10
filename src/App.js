import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { TailwindLogo } from './TailwindLogo';

function App() {
  const [baseSize, setBaseSize] = useState(16);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSize = parseFloat(inputRef.current.value);
    if (!isNaN(newSize)) setBaseSize(parseFloat(newSize));
  };

  const rows = [];

  for (let i = 1; i <= 96; i += 0.5) {
    const key = parseFloat(i.toFixed(1));

    const label = (key % 1 === 0) ? key.toFixed(0) : key.toFixed(1);
    const remValue = parseFloat((i * 0.25).toFixed(2));
    const pxValue = parseFloat((remValue * baseSize).toFixed(1));

    rows.push(
      <tr key={label}>
        <td className="class-row">property-{label}</td>
        <td className="property-row">property: {remValue}rem</td>
        <td className="value-row">{pxValue}px</td>
      </tr>
    );
  }

  return (
    <div>
      <header>
        <div className="header-wrapper">
          <TailwindLogo />
        <h1>tailwindcss sizing chart</h1>
        </div>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="fontSize">
              Set Base Font Size (px)
            </label>
            <input
              id="fontSize"
              className="clean-input"
              ref={inputRef}
              defaultValue={baseSize}
              placeholder="Enter base font-size"
              type="text"
              step="0.1"
            />
            <button
            type="submit"
          >
            Set Size
          </button>
          </div>
        </form>

        <table className="table-custom">
          <thead>
            <tr>
              <th>Class</th>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
