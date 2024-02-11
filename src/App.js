
//import './App.css';
import Header from "./Header";
import StudentContainer from "./StudentContainer";
import ParentContainer from "./ParentContainer"
import { useState } from "react";
import { useEffect } from "react";
import StudentForm from "./StudentForm";

function App() {
  const [showForm, setShowForm] = useState(true)
  const [students, setStudents] = useState([])
  const [parents, setParents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3006/students")
    .then((response) => response.json())
    .then((json) => {console.log(json)
      setStudents(json)})
  }, []) 

  useEffect(() => {
    fetch("http://localhost:3006/parents")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setParents(json)
    })
  }, [])


  return (
    <div className="grid-container"  >
      <Header showForm={showForm} setShowForm={setShowForm}></Header>
      <StudentContainer students={students}></StudentContainer> 
      {showForm ? <StudentForm></StudentForm> : null}
      <ParentContainer parents={parents}></ParentContainer>
    </div>
  );
}

export default App;
