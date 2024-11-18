
function Header({showForm, setShowForm}) {
    // console.log("header loaded")
    function handleClick() {
        setShowForm(!showForm)
    }




    return (
        // <div className="item1" id="logo"></div>
        <div className="header" >
            {/* <img id="logo" src="teachlogo.png" alt="logo"></img> */}
            <img id="books" src="books.png" alt="books"></img>
            <h1 id="title">Teach Tools</h1>

            
           <div id="links">
            <a  href="http://localhost:3001/parents">Parents</a><br></br>
            <a  href="http://localhost:3001/">Students</a><br></br>
            <button  onClick={handleClick}>Add Student/Parent</button><br></br>
            </div> 
        
        
        </div>

    )
}

export default Header