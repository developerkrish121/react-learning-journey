import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Runs only once after component loads
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Runs whenever count changes
  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  // Fetch data from API
  const fetchUsers = async () => {
    setLoading(true);

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="container">

      <h1>Day 6 - useEffect Hook</h1>

      {/* Counter */}

      <div className="card">
        <h2>Counter</h2>

        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      {/* Input */}

      <div className="card">
        <h2>Live Input</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h3>Hello {name || "Guest"} 👋</h3>
      </div>

      {/* API */}

      <div className="card">

        <h2>Fetch Users</h2>

        <button onClick={fetchUsers}>
          Get Users
        </button>

        {loading && <p>Loading...</p>}

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <br />
              {user.email}
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;