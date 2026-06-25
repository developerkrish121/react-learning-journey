import { useState } from "react";

function App() {
  // ----------------------------
  // Counter State
  // ----------------------------
  const [count, setCount] = useState(0);

  // ----------------------------
  // Object State
  // ----------------------------
  const [user, setUser] = useState({
    name: "Krishna",
    age: 21,
  });

  // ----------------------------
  // Array State
  // ----------------------------
  const [fruits, setFruits] = useState([
    "Apple",
    "Mango",
    "Orange",
  ]);

  // ----------------------------
  // Input State
  // ----------------------------
  const [newFruit, setNewFruit] = useState("");

  // ----------------------------
  // Counter Functions
  // ----------------------------
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  // ----------------------------
  // Object Function
  // ----------------------------
  const increaseAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };

  // ----------------------------
  // Add Fruit
  // ----------------------------
  const addFruit = () => {
    if (newFruit.trim() === "") {
      alert("Please enter a fruit name.");
      return;
    }

    setFruits([...fruits, newFruit]);

    setNewFruit("");
  };

  // ----------------------------
  // Delete Fruit
  // ----------------------------
  const deleteFruit = (indexToDelete) => {
    const updatedFruits = fruits.filter(
      (_, index) => index !== indexToDelete
    );

    setFruits(updatedFruits);
  };

  // ----------------------------
  // Replace First Fruit
  // ----------------------------
  const replaceFirstFruit = () => {
    if (fruits.length === 0) return;

    const updated = [...fruits];
    updated[0] = "Banana";

    setFruits(updated);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        React Day 3 Practice
      </h1>

      <hr />

      {/* ========================= */}
      {/* Counter */}
      {/* ========================= */}

      <h2>Counter</h2>

      <h1>{count}</h1>

      <button onClick={increase}>Increase</button>

      <button
        onClick={decrease}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>

      <button
        onClick={reset}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>

      <hr />

      {/* ========================= */}
      {/* Object State */}
      {/* ========================= */}

      <h2>User Information</h2>

      <h3>Name : {user.name}</h3>

      <h3>Age : {user.age}</h3>

      <button onClick={increaseAge}>
        Increase Age
      </button>

      <hr />

      {/* ========================= */}
      {/* Fruit Manager */}
      {/* ========================= */}

      <h2>Fruit Manager</h2>

      <input
        type="text"
        placeholder="Enter Fruit"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />

      <button
        onClick={addFruit}
        style={{ marginLeft: "10px" }}
      >
        Add Fruit
      </button>

      <button
        onClick={replaceFirstFruit}
        style={{ marginLeft: "10px" }}
      >
        Replace First Fruit
      </button>

      <br />
      <br />

      {fruits.length === 0 ? (
        <h3>No Fruits Available</h3>
      ) : (
        fruits.map((fruit, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <span>
              {index + 1}. {fruit}
            </span>

            <button
              onClick={() => deleteFruit(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;