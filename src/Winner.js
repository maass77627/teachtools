//import { useEffect } from "react"
//import { useState } from "react"


function Winner({students}) {
  console.log("winner loaded")

//const [isLoaded, setisLoaded] = useState(false)


//useEffect(() =>{
  //  setisLoaded(true)
  //  console.log("winner useeffect loaded")
  //  }, [students])

   // console.log(isLoaded)
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
}

  

        

//<h4>{findWinner()}</h4>

//<h4>{isLoaded ? findWinner() : null}</h4>
    return (
        <div id="winner">
          <h4>{students ? findWinner() : null}</h4>
          
        </div>
    )
}

export default Winner