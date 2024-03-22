

function Parent({parent}) {


    return(
        <div id="parent">
           <h3>Parent Name: {parent.name} </h3>
           <h4> Contact: {parent.phone}</h4>
        </div>
    )
}

export default Parent