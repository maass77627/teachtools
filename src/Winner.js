




function Winner(students) {
console.log(students.students)
    
function findWinner() {
const winners = students.students.sort((a,b) => a.points - b.points)
   console.log(winners)
   
let num = winners.length - 1
console.log(winners[num].firstName)
   return winners[num].firstName
//console.log(winners[num])
}

  

        



    return(
        <div id="winner">
          <h4>{findWinner()}</h4>
        </div>
    )
}

export default Winner