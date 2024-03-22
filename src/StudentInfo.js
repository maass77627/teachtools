

function StudentInfo({student, deleteStudent, updateStudent}) {

   
    function handleDelete(student) {
        fetch(`http://localhost:3006/students/${student.id}`, {
            method: "DELETE"
        })
        deleteStudent(student.id)
    }

     
          
       

    

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