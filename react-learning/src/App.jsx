import { useState } from "react";

function App() {
  // -----------------------
  // Form State
  // -----------------------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
    gender: "",
    terms: false,
  });

  // -----------------------
  // Submitted Data
  // -----------------------
  const [submittedData, setSubmittedData] = useState(null);

  // -----------------------
  // Handle Input Change
  // -----------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // -----------------------
  // Submit Form
  // -----------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.age === "" ||
      formData.course === "" ||
      formData.gender === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!formData.terms) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    setSubmittedData(formData);

    alert("Registration Successful!");

    setFormData({
      name: "",
      email: "",
      age: "",
      course: "",
      gender: "",
      terms: false,
    });
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Age</label>
        <br />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <label>Course</label>
        <br />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="MERN">MERN Stack</option>
        </select>

        <br /><br />

        <label>Gender</label>

        <br />

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female

        <br /><br />

        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        I Accept Terms & Conditions

        <br /><br />

        <button type="submit">
          Register
        </button>
      </form>

      <hr />

      {submittedData && (
        <>
          <h2>Submitted Details</h2>

          <p><strong>Name:</strong> {submittedData.name}</p>

          <p><strong>Email:</strong> {submittedData.email}</p>

          <p><strong>Age:</strong> {submittedData.age}</p>

          <p><strong>Course:</strong> {submittedData.course}</p>

          <p><strong>Gender:</strong> {submittedData.gender}</p>
        </>
      )}
    </div>
  );
}

export default App;