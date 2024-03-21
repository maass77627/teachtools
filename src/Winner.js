//import { useEffect } from "react"
//import { useState } from "react"


function Winner({students}) {

  console.log("winner loaded")




function findWinner() {
  const winners = students.sort((a,b) => a.points - b.points)
  console.log(winners)
   let num = winners.length - 1
    console.log(winners[num].firstName)
   return winners[num].firstName
}

  
    return (
        <div id="winner">
          <p>Class point leader</p>
          <h32>{students ? findWinner() : null}</h32>
        </div>
    )
}

export default Winner