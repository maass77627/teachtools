
import React from "react"
import Header from "./Header";
import Winner from "./Winner";
import StudentContainer from "./StudentContainer";
import ParentContainer from "./ParentContainer"
import { useState } from "react";
import { useEffect } from "react";
import StudentForm from "./StudentForm";
import ParentForm from "./ParentForm";
import Timerz from "./Timer";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  // console.log("app loaded")

  const [appLoaded, setAppLoaded] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [students, setStudents] = useState()
  const [parents, setParents] = useState([])




  useEffect(() => {
    fetch("http://localhost:3006/students")
    .then((response) => response.json())
    .then((json) => {
      setStudents(json)})
      setAppLoaded(true)
      // console.log("students useeffect loaded")
  }, []) 



  useEffect(() => {
    fetch("http://localhost:3006/parents")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json)
      setParents(json)
      // console.log("parents useeffect loaded")
    })
  }, [parents])

function addStudent(student) {
  // console.log(student)
 const updatedStudents = students.push(student)
      setStudents(updatedStudents)
 }

  function deleteStudent(id) {
    const updatedStudents = students.filter(student => student.id !== id)
    setStudents(updatedStudents)
  }


  return (
    // <div className="grid-container">
    <div id="body">

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<StudentContainer deleteStudent={deleteStudent} students={students}/>}></Route>
      <Route path="/parents" element={<ParentContainer  students={students} parents={parents}></ParentContainer>}></Route>
      <Route path="*" element={<NoPage>Error</NoPage>}></Route>
      </Routes>
    </BrowserRouter>
         
    <Header showForm={showForm} setShowForm={setShowForm}></Header>

    
      {appLoaded ? <Winner students={students}/> : null}
      {showForm ? <StudentForm addStudent={addStudent}/> : null}
      {showForm ? <ParentForm/> : <Timerz/>}

      
      
    </div>

  );
}

export default App;
