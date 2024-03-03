
//import './App.css';
import Header from "./Header";
import StudentContainer from "./StudentContainer";
import ParentContainer from "./ParentContainer"
import { useState } from "react";
import { useEffect } from "react";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";
import Timer from "./Timer";
//import { Route } from "react-router-dom";
//import Navbar from "./Navbar";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showForm, setShowForm] = useState(false)
  const [students, setStudents] = useState([])
  const [parents, setParents] = useState([])

  function deleteStudent(id) {
      const updatedStudents = students.filter(student => student.id !== id)
      setStudents(updatedStudents)
  }

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
     
       
        <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<StudentContainer deleteStudent={deleteStudent} students={students}/>}></Route>
          <Route path="/parents" element={<ParentContainer parents={parents}></ParentContainer>}></Route>
          <Route path="*" element={<NoPage>Error</NoPage>}></Route>
        </Routes>
        </BrowserRouter>
         
        
        

      <Header showForm={showForm} setShowForm={setShowForm}></Header>
      
      {showForm ? <StudentForm></StudentForm> : null}
      {showForm ? <ParentForm></ParentForm> : <Timer/>}

      
      
    </div>

  );
}

export default App;
