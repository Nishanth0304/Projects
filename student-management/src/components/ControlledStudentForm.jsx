
import { useState } from "react";
import { useStudents } from "../context/StudentContext";

const initialForm = {
  name: "",
  email: "",
  course: "React JS",
  marks: "0",
};

function ControlledStudentForm() {
  const { addStudent } = useStudents();

  // React state controls every input
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setError("");
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const marks = Number(form.marks);

    if (!name || !email) {
      setError("Name and email are required.");
      return;
    }

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
      setError("Marks must be between 0 and 100.");
      return;
    }

    addStudent({
      name,
      email,
      course: form.course,
      marks,
    });

    setForm(initialForm);
    setError("");
    setMessage("Student added successfully!");
  }

  return (
    <section className="panel form-panel">
      <div className="section-heading">
        <div>
          <h2>Controlled Form</h2>
          <p>Input values are managed by React state.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="controlled-name">Full Name</label>
          <input
            id="controlled-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="controlled-email">Email</label>
          <input
            id="controlled-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="student@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="controlled-course">Course</label>
          <select
            id="controlled-course"
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
          <label htmlFor="controlled-marks">Marks</label>
          <input
            id="controlled-marks"
            type="number"
            name="marks"
            min="0"
            max="100"
            value={form.marks}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        {message && (
          <p className="success-message">{message}</p>
        )}

        <button className="primary-button" type="submit">
          Add Student
        </button>
      </form>

      <div className="form-explanation">
        <strong>Current name value:</strong>
        <p>{form.name || "Nothing entered yet"}</p>
        <small>
          This preview updates immediately because React state
          controls the input.
        </small>
      </div>
    </section>
  );
}

export default ControlledStudentForm;
