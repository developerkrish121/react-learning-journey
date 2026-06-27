// StudentCard Component
// This component receives data from App.jsx using props.

function StudentCard({
  student,
  onViewProfile,
  onDeleteStudent,
  onShowResult,
}) {
  return (
    <div className="card">
      {/* Student Name */}
      <h2>{student.name}</h2>

      {/* Student Details */}
      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Percentage:</strong> {student.percentage}%
      </p>

      <p>
        <strong>College:</strong> {student.college}
      </p>

      {/* Buttons */}
      <div className="button-group">
        <button
          onClick={() => onViewProfile(student.name)}
        >
          View Profile
        </button>

        <button
          onClick={() => onDeleteStudent(student.name)}
        >
          Delete
        </button>

        <button
          onClick={() => onShowResult(student)}
        >
          Result
        </button>
      </div>
    </div>
  );
}

export default StudentCard;