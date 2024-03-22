

function Winner({students}) {

  console.log("winner loaded")




function findWinner() {
      const winners = students.sort((a,b) => a.points - b.points)
      let num = winners.length - 1
      return winners[num].firstName
}

  
    return (
        <div id="winner">
          <p>Class point leader</p>
          <p>{students ? findWinner() : null}</p>
        </div>
    )
}

export default Winner