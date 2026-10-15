
import { useMemo, useState } from "react";
import { useStudents } from "../context/StudentContext";
import StudentCard from "./StudentCard";

function StudentList({ onEdit }) {
  const { students, deleteStudent } = useStudents();
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");

  const filteredStudents = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchText) ||
        student.email.toLowerCase().includes(searchText);

      const matchesCourse =
        courseFilter === "All" ||
        student.course === courseFilter;

      return matchesSearch && matchesCourse;
    });
  }, [students, search, courseFilter]);

  function handleDelete(student) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );

    if (confirmed) {
      deleteStudent(student.id);
    }
  }

  return (
    <section className="student-list-section">
      <div className="section-heading list-heading">
        <div>
          <h2>All Students</h2>
          <p>
            {filteredStudents.length} of {students.length} students
          </p>
        </div>
      </div>

      <div className="filter-bar">
        <input
          type="search"
          placeholder="Search by name or email..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search students"
        />

        <select
          value={courseFilter}
          onChange={(event) => setCourseFilter(event.target.value)}
          aria-label="Filter by course"
        >
          <option value="All">All Courses</option>
          <option value="React JS">React JS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value=".NET">.NET</option>
          <option value="Angular">Angular</option>
        </select>
      </div>

      {filteredStudents.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>
          <h3>No students found</h3>
          <p>Try another search or add a new student.</p>
        </div>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={onEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;
