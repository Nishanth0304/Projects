
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

import { StudentProvider } from "./context/StudentContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function NotFound() {
  return (
    <main className="main-content">
      <section className="panel page-panel">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link className="primary-button back-home" to="/">
          Go to Home
        </Link>
      </section>
    </main>
  );
}

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="brand brand-link">
            <div className="brand-logo">S</div>
            <div>
              <h1>StudentHub</h1>
              <p>Student Management System</p>
            </div>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer className="app-footer">
        <p>StudentHub · Built with React Hooks and React Router</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <AppLayout />
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;
