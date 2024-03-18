import { useEffect } from "react"
import { useState } from "react"


function Winner({students}) {
  console.log("winner loaded")
  //console.log(props)
  console.log(students)

const [isLoaded, setisLoaded] = useState(false)


  // console.log(isLoaded)

useEffect(() =>{
     setisLoaded(true)
     console.log("winner useeffect loaded")
    }, [students])
//[]
//useEffect(( ) => {
 // const winners = students.students.sort((a,b) => a.points - b.points)
  /// console.log(winners)
   
//let num = winners.length - 1
//console.log(winners[num].firstName)
  // return winners[num].firstName
//console.log(winners[num])
//})



function findWinner() {
  const winners = students.sort((a,b) => a.points - b.points)
  console.log(winners)
   let num = winners.length - 1
    console.log(winners[num].firstName)
   return winners[num].firstName
//console.log(winners[num])
}

  

        

//<h4>{findWinner()}</h4>

//<h4>{isLoaded ? findWinner() : null}</h4>
    return(
        <div id="winner">
          
          <h4>{isLoaded ? findWinner() : null}</h4>
        </div>
    )
}

export default Winner