import Student from "./Student"


function StudentContainer({students, deleteStudent}) {

    
    return(
        <div className="item2">
            <h2 id="h2">Students</h2>
            {students.map((student) => <Student deleteStudent={deleteStudent} key={student.id} student={student} students={students}></Student>)}
        </div>
    )
}

export default StudentContainer