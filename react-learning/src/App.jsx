import "./App.css";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import Stats from "./components/Stats";

function App() {

  // -----------------------------
  // Student Data
  // -----------------------------
  const students = [
    {
      id: 1,
      name: "Krishna",
      course: "React",
      percentage: 92,
      college: "Quantum University",
    },
    {
      id: 2,
      name: "Rahul",
      course: "Java",
      percentage: 85,
      college: "Quantum University",
    },
    {
      id: 3,
      name: "Anjali",
      course: "Python",
      percentage: 90,
      college: "Quantum University",
    },
    {
      id: 4,
      name: "Amit",
      course: "DSA",
      percentage: 88,
      college: "Quantum University",
    },
    {
      id: 5,
      name: "Neha",
      course: "MERN Stack",
      percentage: 95,
      college: "Quantum University",
    },
  ];

  // -----------------------------
  // Callback Functions
  // -----------------------------

  // View Profile
  const viewProfile = (studentName) => {
    alert(`Viewing Profile of ${studentName}`);
  };

  // Delete Student
  const deleteStudent = (studentName) => {
    alert(`Deleting ${studentName}`);
  };

  // Show Result
  const showResult = (student) => {
    alert(
      `${student.name} scored ${student.percentage}% in ${student.course}`
    );
  };

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <>
      {/* Header */}
      <Header />

      {/* Statistics */}
      <Stats students={students} />

      {/* Student Cards */}
      <div className="container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onViewProfile={viewProfile}
            onDeleteStudent={deleteStudent}
            onShowResult={showResult}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;