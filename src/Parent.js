//  import { useState } from "react";

function Parent({parent, students}) {
    console.log(students)

    
    function studentName() {
        const newstudent = students.filter(student => student.parentName == parent.name)
        console.log(newstudent[0])

        if (newstudent[0] === null || newstudent[0] === undefined) {
        
        console.log("no student")
            return "unknown"
        
        }
        else {
            console.log("yes a student")
        return newstudent[0].firstName
           
        }
    }

    

    return(
        <div id="parent">
           <h3>Parent Name: {parent.name} </h3><br></br>
             <h4> Student Name: {studentName()} </h4> <br></br>
           <h5> Contact: {parent.phone}</h5><br></br>
        </div>
    )
}

export default Parent