import Student from "./Student"


function StudentContainer({students}) {

    
    return(
        <div className="item2">
            <h2>Students</h2>
            {students.map((student) => <Student key={student.id} student={student} students={students}></Student>)}
        </div>
    )
}

export default StudentContainer