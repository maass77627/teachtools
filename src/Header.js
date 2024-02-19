
function Header({showForm, setShowForm}) {

    function handleClick() {
        setShowForm(!showForm)
    }




    return (
        <div className="item1">
            <h1 id="title">Teach Tools</h1>
            <a  href="http://localhost:3001/parents">Parents</a>
            <button onClick={handleClick}>Add Student</button>
            <button onClick={handleClick}>Add Parent</button>
        
        
        </div>

    )
}

export default Header