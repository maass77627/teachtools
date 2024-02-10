
//import './App.css';
import Header from "./Header";
import StudentContainer from "./StudentContainer";
import ParentContainer from "./ParentContainer"
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3006/students")
    .then((response) => response.json())
    .then((json) => {console.log(json)
      setStudents(json)})
  }, []) 


  return (
    <div className="App">
      <Header></Header>
      <StudentContainer students={students}></StudentContainer>
      <ParentContainer></ParentContainer>
    </div>
  );
}

export default App;
