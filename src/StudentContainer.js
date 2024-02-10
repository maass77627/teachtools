import Student from "./Student"


function StudentContainer({students}) {

    
    return(
        <div id="student-container">
            <h1>StudentContainer Component</h1>
            {students.map((student) => <Student key={student.id} student={student}></Student>)}
        </div>
    )
}

export default StudentContainer