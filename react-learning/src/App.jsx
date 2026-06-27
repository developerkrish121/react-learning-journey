import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";

function App() {
  const students = [
    {
      id: 1,
      name: "Krishna",
      course: "React",
      percentage: 92,
      college: "Quantum University",
      email: "krishna@example.com",
      phone: "123-456-7890",
      skills: "JavaScript, React, Node.js"
    },
    {
      id: 2,
      name: "Rahul",
      course: "Java",
      percentage: 85,
      college: "Quantum University",
      email: "krishna@example.com",
      phone: "123-456-7890",
      skills: "JavaScript, React, Node.js"
    },
    {
      id: 3,
      name: "Anjali",
      course: "Python",
      percentage: 90,
      college: "Quantum University",
      email: "anjali@example.com",
      phone: "098-765-4321",
      skills: "Python, Django, Flask"
    },
    {
      id: 4,
      name: "Amit",
      course: "DSA",
      percentage: 88,
      college: "Quantum University",
      email: "amit@example.com",
      phone: "555-555-5555",
      skills: "C++, Algorithms, Data Structures"
    },
    {
      id: 5,
      name: "Neha",
      course: "MERN",
      percentage: 95,
      college: "Quantum University",
      email: "neha@example.com",
      phone: "111-111-1111",
      skills: "JavaScript, React, Node.js, MongoDB"
    },
  ];

  const viewProfile = (studentName) => {
    alert(`Viewing Profile of ${studentName}`);
  };

  const deleteProfile = (studentNmae) => {
    alert(`Deleting profile of ${studentNmae}`);
  }

  return (
    <>
      <Header />

      <div className="container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onViewProfile={viewProfile}
            onDeleteProfile={deleteProfile}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;