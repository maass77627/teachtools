
import { useEffect, useState } from "react";


function Timer() {

    const [count, setCount] = useState(0)

   // useEffect(() => {
      //  setTimeout(() => setCount(0), 5000);
      //}, []);

   // useEffect(() => {
     //  setInterval(() => setCount((count) => count + 1), 1000);
   // }, []);

   function handleStart() {
    setInterval(() => setCount((count) => count + 1), 1000)
   
}

   function handleStop() {
    clearInterval(setCount(0))
   }

return (
    <div id="timer">
        {count}<br></br>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
    </div>

)

}

export default Timer