
function getGrade(marks) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
}

function StudentCard({ student, onEdit, onDelete }) {
  const grade = getGrade(student.marks);

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="student-avatar">
          {student.name.charAt(0).toUpperCase()}
        </div>

        <span className={`grade-badge grade-${grade.replace("+", "plus")}`}>
          {grade}
        </span>
      </div>

      <h3>{student.name}</h3>
      <p className="student-email">{student.email}</p>

      <div className="student-course">
        <span>Course</span>
        <strong>{student.course}</strong>
      </div>

      <div className="marks-section">
        <div className="marks-label">
          <span>Performance</span>
          <strong>{student.marks}/100</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label={`${student.name} marks`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={student.marks}
        >
          <div
            className="progress-fill"
            style={{ width: `${student.marks}%` }}
          />
        </div>
      </div>

      <div className="card-actions">
        <button
          className="edit-button"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(student)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
