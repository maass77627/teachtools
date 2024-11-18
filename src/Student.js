import { useState } from "react"
import StudentInfo from "./StudentInfo"
import React from "react"

function Student({student, deleteStudent}) {
    
       
    
    const [toggle, setToggle] = useState(false)
    
        function handleClick() {
            setToggle(!toggle)
    }

    const [points, setPoints] = useState(student.points)
    

    function updateStudent() {
         
          fetch(`http://localhost:3006/students/${student.id}`, {
           method: "PATCH",
           headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {points: points + 1})
      })
      .then((response) => response.json())
      .then((json) => console.log(json))
     
      
      setPoints((points) => points + 1)
      
    }



    return(
        
        <div onClick={() => handleClick()} id="student">
            <h3>{student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1)}</h3>
            <img   id="student-image" src={student.image} alt="animal"></img>
            <h4>{points}</h4>
            {toggle ? <StudentInfo updateStudent={updateStudent} deleteStudent={deleteStudent} student={student}></StudentInfo> : null}
        </div>
    )
}

export default Student