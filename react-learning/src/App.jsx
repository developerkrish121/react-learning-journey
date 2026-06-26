import { useState } from "react";

function App() {
  // ----------------------------
  // Form State
  // ----------------------------
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    gender: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialForm);
  const [submittedData, setSubmittedData] = useState(null);

  // ----------------------------
  // Handle Input Change
  // ----------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ----------------------------
  // Clear Form
  // ----------------------------
  const clearForm = () => {
    setFormData(initialForm);
  };

  // ----------------------------
  // Handle Submit
  // ----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // Empty Field Validation
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.age === "" ||
      formData.course === "" ||
      formData.gender === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    // Age Validation
    if (Number(formData.age) < 18) {
      alert("Age must be at least 18.");
      return;
    }

    // Password Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Terms Validation
    if (!formData.terms) {
      alert("Please accept Terms & Conditions.");
      return;
    }

    // Store Submitted Data
    setSubmittedData(formData);

    alert("Registration Successful!");

    // Reset Form
    setFormData(initialForm);
  };

  return (
    <div
      style={{
        width: "450px",
        margin: "30px auto",
        padding: "20px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Student Registration Form
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Email */}
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Phone */}
        <label>Phone Number</label>
        <br />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Age */}
        <label>Age</label>
        <br />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Course */}
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
          <option value="MERN Stack">MERN Stack</option>
        </select>

        <br />
        <br />

        {/* Gender */}
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
          style={{ marginLeft: "15px" }}
        />
        Female

        <br />
        <br />

        {/* Password */}
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Confirm Password */}
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <br />
        <br />

        {/* Terms */}
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />

        <label style={{ marginLeft: "5px" }}>
          I accept Terms & Conditions
        </label>

        <br />
        <br />

        {/* Buttons */}
        <button
          type="submit"
          disabled={!formData.terms}
        >
          Register
        </button>

        <button
          type="button"
          onClick={clearForm}
          style={{ marginLeft: "10px" }}
        >
          Clear Form
        </button>
      </form>

      <hr />

      {/* Submitted Data */}
      {submittedData && (
        <>
          <h2>Submitted Details</h2>

          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Phone:</strong> {submittedData.phone}
          </p>

          <p>
            <strong>Age:</strong> {submittedData.age}
          </p>

          <p>
            <strong>Course:</strong> {submittedData.course}
          </p>

          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
        </>
      )}
    </div>
  );
}

export default App;