//import { useState } from "react"


function Student({student, students}) {

    //const [points, setPoints] = useState(student.points)

    function handleClick(student) {

        console.log(student)
      fetch(`http://localhost:3006/students/${student.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        //body: JSON.stringify({ student: {points: student.points + 1}})
        body: JSON.stringify( {points: student.points + 1})
      })
        //setPoints()
    }



    return(
        <div onClick={() => handleClick(student)} id="student">
            <h3>{student.firstName}</h3>
            <img   id="student-image"src={student.image} alt="animal"></img>
            <h4>{student.points}</h4>
            
        </div>
    )
}

export default Student