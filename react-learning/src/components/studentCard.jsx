function StudentCard({ student, onViewProfile, onDeleteProfile }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Percentage:</strong> {student.percentage}%
      </p>

      <p>
        <strong>College:</strong> {student.college}
      </p>

       <p>
        <strong>Email:</strong> {student.email}
      </p>

       <p>
        <strong>Phone:</strong> {student.phone}
      </p>

       <p>
        <strong>Skills:</strong> {student.skills}
      </p>

      <button
        onClick={() => onViewProfile(student.name)}
      >
        View Profile
      </button>

      <button 
        onClick={() => onDeleteProfile(student.name)}
      >
        Delete profile
      </button>
    </div>
  );
}

export default StudentCard;