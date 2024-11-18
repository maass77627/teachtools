
import React from "react";
function Parent({parent, students}) {
    
   
    
    function studentName() {
        if (students) {
        const newstudent = students.filter(student => student.parentName === parent.name)
        

        if (newstudent[0] === null || newstudent[0] === undefined) {
        
        console.log("no student")
            return "unknown"
        
        }
        else {
           
        return newstudent[0].firstName
           
        }
    } else {
        console.log("no students")
    }
    }

    

    return(
        <div id="parent">
           <h6>Parent Name: {parent.name} </h6>
             <h5> Student Name: {studentName()} </h5> 
           <h6> Contact: {parent.phone}</h6><br></br>
        </div>
    )
}

export default Parent