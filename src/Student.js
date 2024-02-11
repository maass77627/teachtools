
function Student({student}) {


    return(
        <div id="student">
            <h3>{student.firstName}</h3>
            <img id="student-image"src={student.image} alt="animal"></img>
            <h4>{student.points}</h4>
            <button>add point</button>
        </div>
    )
}

export default Student