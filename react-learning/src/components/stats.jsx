// Stats Component
// Displays summary statistics about all students.

function Stats({ students }) {
  // Total Students
  const totalStudents = students.length;

  // Highest Percentage
  const highestPercentage = Math.max(
    ...students.map((student) => student.percentage)
  );

  // Total Percentage
  const totalPercentage = students.reduce(
    (sum, student) => sum + student.percentage,
    0
  );

  // Average Percentage
  const averagePercentage = (
    totalPercentage / totalStudents
  ).toFixed(2);

  return (
    <div className="stats">
      <h2>📊 Dashboard Statistics</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="stat-card">
          <h3>Highest Percentage</h3>
          <p>{highestPercentage}%</p>
        </div>

        <div className="stat-card">
          <h3>Average Percentage</h3>
          <p>{averagePercentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;