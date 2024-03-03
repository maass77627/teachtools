
function Header({showForm, setShowForm}) {

    function handleClick() {
        setShowForm(!showForm)
    }




    return (
        <div className="item1">
            <img id="books" src="books.png" alt="books"></img>
            <h1 id="title">Teach Tools</h1>
            
            <a  href="http://localhost:3001/parents">Parents</a><br></br>
            <a  href="http://localhost:3001/">Students</a><br></br>
            <button  onClick={handleClick}>Add Student/Parent</button><br></br>
            
        
        
        </div>

    )
}

export default Header