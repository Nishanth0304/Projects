
import { useState } from "react";
import { useStudents } from "../context/StudentContext";

import Dashboard from "../components/Dashboard";
import StudentForm from "../components/StudentForm";
import ControlledStudentForm from "../components/ControlledStudentForm";
import UncontrolledStudentForm from "../components/UncontrolledStudentForm";
import StudentList from "../components/StudentList";

function Home() {
  const [editingStudent, setEditingStudent] = useState(null);
  const [formType, setFormType] = useState("controlled");

  const { clearStudents } = useStudents();

  function handleEdit(student) {
    setEditingStudent(student);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingStudent(null);
  }

  function handleClearStudents() {
    if (
      window.confirm(
        "Delete all students? This action cannot be undone."
      )
    ) {
      clearStudents();
      setEditingStudent(null);
    }
  }

  return (
    <main className="main-content">
      <section className="welcome-section">
        <div>
          <p className="eyebrow">OVERVIEW</p>
          <h2>Student Dashboard</h2>
          <p className="welcome-description">
            Manage students, track performance and organize courses.
          </p>
        </div>
        <div className="welcome-icon">✦</div>
      </section>

      <Dashboard />

      <div className="content-layout">
        <div>
          {!editingStudent && (
            <section className="form-switcher">
              <h3>Choose Form Type</h3>

              <div className="form-switcher-buttons">
                <button
                  type="button"
                  className={
                    formType === "controlled"
                      ? "form-tab active"
                      : "form-tab"
                  }
                  onClick={() => setFormType("controlled")}
                >
                  Controlled
                </button>

                <button
                  type="button"
                  className={
                    formType === "uncontrolled"
                      ? "form-tab active"
                      : "form-tab"
                  }
                  onClick={() => setFormType("uncontrolled")}
                >
                  Uncontrolled
                </button>
              </div>
            </section>
          )}

          {editingStudent ? (
            <StudentForm
              editingStudent={editingStudent}
              onCancelEdit={cancelEdit}
            />
          ) : formType === "controlled" ? (
            <ControlledStudentForm />
          ) : (
            <UncontrolledStudentForm />
          )}
        </div>

        <div className="list-panel">
          <StudentList onEdit={handleEdit} />

          <div className="clear-section">
            <p>Want to remove every student record?</p>
            <button
              className="clear-button"
              onClick={handleClearStudents}
            >
              Clear All Students
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
