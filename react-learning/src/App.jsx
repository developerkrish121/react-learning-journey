import "./App.css";

function App() {
  // Array of Strings
  const colors = ["Red", "Blue", "Green", "Black"];

  // Create a new array using map()
  const upperCaseColors = colors.map((color) => color.toUpperCase());

  // Array of Objects
  const students = [
    {
      id: 1,
      name: "Krishna",
      age: 21,
      isPlaced: true,
    },
    {
      id: 2,
      name: "Rahul",
      age: 20,
      isPlaced: false,
    },
    {
      id: 3,
      name: "Ankit",
      age: 22,
      isPlaced: true,
    },
  ];

  return (
    <div className="container">
      <h1>React Day 7 - Lists & Keys</h1>

      {/* ---------------------------- */}
      <h2>1. Original Colors</h2>

      {colors.map((color, index) => (
        <p key={index}>{color}</p>
      ))}

      {/* ---------------------------- */}
      <h2>2. Uppercase Colors</h2>

      {upperCaseColors.map((color, index) => (
        <p key={index}>{color}</p>
      ))}

      {/* ---------------------------- */}
      <h2>3. Student List</h2>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>

          <p>Age : {student.age}</p>

          <p>
            Status :
            {student.isPlaced ? "  Placed" : "  Not Placed"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
