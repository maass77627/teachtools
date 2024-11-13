import { useState } from "react"
import React from "react"

function ParentForm() {

    const [formData, setFormData] = useState({
        name:"George",
        phone: 5125557685,
       })

       function handleNameChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            name: e.target.value
        })
       }

       function handleNumChange(e) {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            phone: e.target.value
        })
       }

       function handleSubmit(e) {
        e.preventDefault()
            console.log(formData)
            fetch("http://localhost:3006/parents", {
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
                <h3>Add Parent</h3>
                <label>name</label><br></br>
                <input onChange={handleNameChange} type="text" name="firstname" value={formData.firstName}></input>
                <label>phone number</label><br></br>
                <input onChange={handleNumChange} type="text" name="lastname" value={formData.lastName}></input>
    
                <button>Submit</button>
            </form>

        </div>
    )

}

export default ParentForm