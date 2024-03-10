
import { useState } from "react";


function Timer() {

    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(false)
    

   // useEffect(() => {
    //  setInterval(() => setCount((count) => count + 1), 1000);
    // return () => {clearInterval(time)}
   // }, [toggle]);

   function handleStart() {
    //setToggle(!toggle)
    setInterval(() => setCount((count) => count + 1), 1000)
   
}

   function handleStop() {
    clearInterval(setCount(0))
    //setToggle(!toggle)
    document.querySelector('#timer').remove()
   }
   //

return (
    <div id="timer">
       {count} <br></br>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
    </div>

)

}

export default Timer