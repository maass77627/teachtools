import Parent from "./Parent"


function ParentContainer({parents}) {


    return(
        <div className="item4">
            <h2 id="h2">Parents</h2>
            {parents.map((parent) => <Parent key={parent.id} parent={parent}></Parent>)}
        </div>
    )
}

export default ParentContainer