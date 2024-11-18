import Student from "./Student"
import React from "react";

function StudentContainer({students, deleteStudent}) {

    
    return(
        // <div className="item2">
        <div id="students">
            <h2 id="h2">Students</h2>
            {students ? students.map((student) => <Student deleteStudent={deleteStudent} key={student.id} student={student} students={students}></Student>) : null}
        </div>
    )
}

export default StudentContainer