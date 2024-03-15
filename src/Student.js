import { useState } from "react"
import StudentInfo from "./StudentInfo"


function Student({student, deleteStudent}) {

        const [toggle, setToggle] = useState(false)
    
        function handleClick() {
            setToggle(!toggle)
    }

    const [points, setPoints] = useState(student.points)

    function updateStudent(student) {
         console.log(student)
      fetch(`http://localhost:3006/students/${student.id}`, {
       method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {points: student.points + 1})
      })
     
      
      setPoints((points) => points + 1)
       console.log(points)
    }



    return(
        <div onClick={() => handleClick(student)} id="student">
            <h3>{student.firstName}</h3>
            <img   id="student-image" src={student.image} alt="animal"></img>
            <h4>{points}</h4>
            {toggle ? <StudentInfo updateStudent={updateStudent} deleteStudent={deleteStudent} student={student}></StudentInfo> : null}
        </div>
    )
}

export default Student