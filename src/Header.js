
function Header({showForm, setShowForm}) {

    function handleClick() {
        setShowForm(!showForm)
    }


    return (
        <div className="item1">
            <h1 id="title">Teach Tools</h1>
            <button onClick={handleClick}>form</button>
        <img id="image" src="ruler2.png" alt="ruler.png"></img>
        
        </div>

    )
}

export default Header