
import { useEffect, useRef, useState } from "react";
import { useStudents } from "../context/StudentContext";

const emptyForm = {
  name: "",
  email: "",
  course: "React JS",
  marks: "0",
};

function StudentForm({ editingStudent, onCancelEdit }) {
  const { addStudent, updateStudent } = useStudents();
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (editingStudent) {
      setForm({
        name: editingStudent.name,
        email: editingStudent.email,
        course: editingStudent.course,
        marks: String(editingStudent.marks),
      });
    } else {
      setForm(emptyForm);
    }

    setError("");
    nameInputRef.current?.focus();
  }, [editingStudent]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const marks = Number(form.marks);

    if (!name || !email) {
      setError("Please enter the student name and email.");
      return;
    }

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
      setError("Marks must be between 0 and 100.");
      return;
    }

    const student = {
      name,
      email,
      course: form.course,
      marks,
    };

    if (editingStudent) {
      updateStudent({
        ...editingStudent,
        ...student,
      });
      onCancelEdit();
    } else {
      addStudent(student);
    }

    setForm(emptyForm);
    setError("");
    nameInputRef.current?.focus();
  }

  function handleCancel() {
    setForm(emptyForm);
    setError("");
    onCancelEdit();
  }

  return (
    <section className="panel form-panel">
      <div className="section-heading">
        <div>
          <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
          <p>
            {editingStudent
              ? "Update the student details below."
              : "Enter details to register a new student."}
          </p>
        </div>
        <span className="heading-icon">＋</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="student-name">Full Name</label>
          <input
            ref={nameInputRef}
            id="student-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="student-email">Email Address</label>
          <input
            id="student-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="student@example.com"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="student-course">Course</label>
            <select
              id="student-course"
              name="course"
              value={form.course}
              onChange={handleChange}
            >
              <option>React JS</option>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>.NET</option>
              <option>Angular</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="student-marks">Marks (0–100)</label>
            <input
              id="student-marks"
              type="number"
              name="marks"
              min="0"
              max="100"
              value={form.marks}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="form-actions">
          <button type="submit" className="primary-button">
            {editingStudent ? "Save Changes" : "Add Student"}
          </button>

          {editingStudent && (
            <button
              type="button"
              className="secondary-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default StudentForm;
