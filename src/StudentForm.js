import { useState } from "react"

function StudentForm() {

    const [formData, setFormData] = useState({
        firstName:"Suzy",
        lastName: "Smith",
        image: "alt",
        points: 0
       })

       function handleChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            firstName: e.target.value
        })
       }



    return (
        <div id="form">
            <form>
                <h3>Add Student</h3>
                <label>first name</label>
                <input onChange={handleChange} type="text" name="firstname" value={formData.firstName}></input>
                <label>last name</label>
                <input onChange={handleChange} type="text" name="lastname" value={formData.lastName}></input>
                <label>image</label>
                <input onChange={handleChange} type="text" name="image" value={formData.image}></input><br></br>
                <label>points</label>
                <input onChange={handleChange} type="text" name="points" value={formData.points}></input><br></br>
                <button>Submit</button>
            </form>

        </div>
    )

}

export default StudentForm