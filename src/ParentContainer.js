import Parent from "./Parent"
import React from "react"

function ParentContainer({parents, students}) {
    // console.log(students)

    return(
        <div className="item4">
            <h2 id="h2">Parents</h2>
            {parents.map((parent) => <Parent key={parent.id} parent={parent} students={students}></Parent>)}
        </div>
    )
}

export default ParentContainer