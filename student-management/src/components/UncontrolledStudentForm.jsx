
import { useRef, useState } from "react";
import { useStudents } from "../context/StudentContext";

function UncontrolledStudentForm() {
  const { addStudent } = useStudents();

  // Refs give access to the DOM input elements
  const formRef = useRef(null);
  const nameRef = useRef(null);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formElement = formRef.current;

    if (!formElement) return;

    // Read the current input values from the DOM
    const formData = new FormData(formElement);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const course = String(formData.get("course") || "React JS");
    const marks = Number(formData.get("marks"));

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
      course,
      marks,
    });

    setSubmittedName(name);
    setError("");
    setMessage("Student added successfully!");

    // Reset DOM-managed inputs
    formElement.reset();

    // Restore the initial course and marks
    formElement.elements.course.value = "React JS";
    formElement.elements.marks.value = "0";

    // Focus the name field for the next entry
    nameRef.current?.focus();
  }

  return (
    <section className="panel form-panel">
      <div className="section-heading">
        <div>
          <h2>Uncontrolled Form</h2>
          <p>Input values are read directly from the DOM.</p>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="uncontrolled-name">Full Name</label>
          <input
            ref={nameRef}
            id="uncontrolled-name"
            name="name"
            placeholder="Enter student name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="uncontrolled-email">Email</label>
          <input
            id="uncontrolled-email"
            type="email"
            name="email"
            placeholder="student@example.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="uncontrolled-course">Course</label>
          <select
            id="uncontrolled-course"
            name="course"
            defaultValue="React JS"
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
          <label htmlFor="uncontrolled-marks">Marks</label>
          <input
            id="uncontrolled-marks"
            type="number"
            name="marks"
            min="0"
            max="100"
            defaultValue="0"
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
        <strong>Last submitted name:</strong>
        <p>{submittedName || "No student submitted yet"}</p>
        <small>
          The name appears here after submission. While typing,
          React does not control the input value.
        </small>
      </div>
    </section>
  );
}

export default UncontrolledStudentForm;
