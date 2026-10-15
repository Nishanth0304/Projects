
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const StudentContext = createContext(null);

const initialStudents = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@example.com",
    course: "React JS",
    marks: 85,
  },
  {
    id: 2,
    name: "Priya Kumar",
    email: "priya@example.com",
    course: "Python",
    marks: 92,
  },
  {
    id: 3,
    name: "Arun Kumar",
    email: "arun@example.com",
    course: "JavaScript",
    marks: 68,
  },
];

function getInitialState() {
  try {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents !== null) {
      const parsed = JSON.parse(savedStudents);

      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Could not load students:", error);
  }

  return initialStudents;
}

function studentReducer(state, action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];

    case "UPDATE_STUDENT":
      return state.map((student) =>
        student.id === action.payload.id
          ? action.payload
          : student
      );

    case "DELETE_STUDENT":
      return state.filter(
        (student) => student.id !== action.payload
      );

    case "CLEAR_STUDENTS":
      return [];

    default:
      return state;
  }
}

export function StudentProvider({ children }) {
  const [students, dispatch] = useReducer(
    studentReducer,
    undefined,
    getInitialState
  );

  useEffect(() => {
    try {
      localStorage.setItem("students", JSON.stringify(students));
    } catch (error) {
      console.error("Could not save students:", error);
    }
  }, [students]);

  function addStudent(student) {
    dispatch({
      type: "ADD_STUDENT",
      payload: {
        ...student,
        id: Date.now() + Math.random(),
      },
    });
  }

  function updateStudent(student) {
    dispatch({
      type: "UPDATE_STUDENT",
      payload: student,
    });
  }

  function deleteStudent(id) {
    dispatch({
      type: "DELETE_STUDENT",
      payload: id,
    });
  }

  function clearStudents() {
    dispatch({ type: "CLEAR_STUDENTS" });
  }

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
        clearStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentContext);

  if (context === null) {
    throw new Error(
      "useStudents must be used inside StudentProvider"
    );
  }

  return context;
}
