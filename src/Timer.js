
import { useState } from "react";


function Timer() {

    const [count, setCount] = useState(0)
   

   function handleStart() {
    setInterval(() => setCount((count) => count + 1), 1000)
   
}

   function handleStop() {
    clearInterval(setCount(0))
    document.querySelector('#timer').remove()
   }
   

return (
    <div id="timer">
       {count} <br></br>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
    </div>

)

}

export default Timer