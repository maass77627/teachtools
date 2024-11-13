
import React from "react";
function Parent({parent, students}) {
    
    // if (students) {
    //     return <h1>Welcome back!</h1>;
    //   }
    //   return <h1>Please sign in.</h1>;
    // }
    
    function studentName() {
        if (students) {
        const newstudent = students.filter(student => student.parentName === parent.name)
        // console.log(newstudent[0])

        if (newstudent[0] === null || newstudent[0] === undefined) {
        
        console.log("no student")
            return "unknown"
        
        }
        else {
            // console.log("yes a student")
        return newstudent[0].firstName
           
        }
    } else {
        console.log("no students")
    }
    }

    

    return(
        <div id="parent">
           <h6>Parent Name: {parent.name} </h6>
             <h5> Student Name: {studentName()} </h5> <br></br>
           <h6> Contact: {parent.phone}</h6><br></br>
        </div>
    )
}

export default Parent