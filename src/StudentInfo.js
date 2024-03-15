//import { useState } from "react";

function StudentInfo({student, deleteStudent, updateStudent}) {

   // const [points, setPoints] = useState(student.points)

    //function updateStudent(data) {
     //   console.log(data.points)
     //  setPoints(data.points)
    //}

    function handleDelete(student) {
        fetch(`http://localhost:3006/students/${student.id}`, {
            method: "DELETE"
        })
        deleteStudent(student.id)
    }

   // function handleClick(e) {
    //    e.preventDefault()
    //    console.log(student)
     //     fetch(`http://localhost:3006/students/${student.id}`, {
     //       method: "PATCH",
      //      headers: {
      //         "Content-Type": "application/json",
      //      },
      //      body: JSON.stringify( {points: student.points + 1})
      //    })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data))
          
       //  console.log(points)
       //    setPoints((points) => points + 1)
       //    console.log(points)
   // }

    

    return(
        <div className="item3">
            <h1>{student.firstName}</h1>
            <h3>Parent: {student.parentName}</h3>
            <button onClick={() => handleDelete(student)}>delete</button>
            <button onClick={(student) => updateStudent(student)}>add points</button>

        </div>
    )
}

export default StudentInfo