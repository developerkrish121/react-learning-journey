// Importing useState Hook from React
// useState helps us store and update data inside a component
import { useState } from "react";

function App() {

  // Creating a state variable called count
  // count = current value
  // setCount = function used to update count
  // 0 = initial value
  const [count, setCount] = useState(0);

  // Function to increase count by 1
  function increment() {
    setCount(count + 1);
  }

  // Function to decrease count by 1
  function decrement() {
    setCount(count - 1);
  }

  // Function to reset count back to 0
  function reset() {
    setCount(0);
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      {/* Main Heading */}
      <h1>Counter App</h1>

      {/* Display current count value */}
      <h2>Count: {count}</h2>

      {/* Conditional Rendering */}
      {/* Show this message only when count becomes greater than 10 */}
      {count > 10 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🔥 Great Progress!
        </p>
      )}

      {/* Increment Button */}
      {/* Calls increment() when clicked */}
      <button
        onClick={increment}
        style={{
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      {/* Decrement Button */}
      {/* Disabled when count becomes 0 */}
      <button
        onClick={decrement}
        disabled={count === 0}
        style={{
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      {/* Reset Button */}
      {/* Sets count back to 0 */}
      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

// Exporting App component so React can render it
export default App;