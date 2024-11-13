import { useState } from "react"
import React from "react"

function StudentForm() {

    const [formData, setFormData] = useState({
        firstName:"Suzy",
        lastName: "Smith",
        image: "alt",
        points: 0
       })

       function handleFirstChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            firstName: e.target.value
        })
       }

       function handleLastChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            lastName: e.target.value
        })
       }

       function handleImageChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            image: e.target.value
        })
       }

       function handlePointsChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            points: e.target.value
        })
       }

       function handleSubmit(e) {
        e.preventDefault()
            console.log(formData)
            fetch("http://localhost:3006/students", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }, 
                body: JSON.stringify(formData)
              })
       }



    return (
        <div id="form">
            <form onSubmit={handleSubmit}>
                <h3>Add Student</h3>
                <label>first name</label>
                <input onChange={handleFirstChange} type="text" name="firstname" value={formData.firstName}></input><br></br>
                <label>last name</label><br></br>
                <input onChange={handleLastChange} type="text" name="lastname" value={formData.lastName}></input><br></br>
                <label>image</label><br></br>
                <input onChange={handleImageChange} type="text" name="image" value={formData.image}></input><br></br>
                <label>points</label><br></br>
                <input onChange={handlePointsChange} type="text" name="points" value={formData.points}></input><br></br>
                <button>Submit</button>
            </form>

        </div>
    )

}

export default StudentForm