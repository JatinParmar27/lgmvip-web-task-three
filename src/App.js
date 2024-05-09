import React, { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import EnrolledStudents from "./components/EnrolledStudents";

function App() {
  const [students, setStudents] = useState([]);

  const enrollStudent = (studentData) => {
    setStudents([...students, studentData]);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <RegistrationForm enrollStudent={enrollStudent} />
          </div>
          <div className="col-md-6">
            <EnrolledStudents students={students} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
