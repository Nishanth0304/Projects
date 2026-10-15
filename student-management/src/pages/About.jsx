
function About() {
  return (
    <main className="main-content">
      <section className="panel page-panel">
        <p className="eyebrow">ABOUT THE PROJECT</p>
        <h2>About StudentHub</h2>

        <p>
          StudentHub is a React practice project for managing
          student records and learning modern React concepts.
        </p>

        <h3>React concepts used</h3>

        <ul className="about-list">
          <li>
            <strong>useState:</strong> Manages form fields,
            filters and editing state.
          </li>
          <li>
            <strong>useReducer:</strong> Handles student
            add, update and delete actions.
          </li>
          <li>
            <strong>Context API:</strong> Shares student data
            across components.
          </li>
          <li>
            <strong>Controlled Forms:</strong> Manages input
            values using React state.
          </li>
          <li>
            <strong>Uncontrolled Forms:</strong> Reads input
            values from the DOM.
          </li>
          <li>
            <strong>React Router:</strong> Navigates between
            Home, About and Contact pages.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
