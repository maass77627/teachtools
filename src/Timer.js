//
//import { useState } from "react";
import Timer from "react-compound-timerv2-ocuco"
import React from "react"

function Timerz() {

   // const [count, setCount] = useState(0)
   
   // <div id="timer">
    //   {count} <br></br>
     //   <button onClick={handleStart}>start</button>
     //   <button onClick={handleStop}>stop</button>

 //  function handleStart() {
  //  setInterval(() => setCount((count) => count + 1), 1000)
   
//}

  // function handleStop() {
  //  clearInterval(setCount(0))
  //  document.querySelector('#timer').remove()
  // }
   
//<button onClick={pause}>Pause</button>
return (
    <div id="timer">

    <Timer initialTime={0} startImmediately={false}>
  {({ start, resume, pause, stop, reset, timerState }) => (
    <>
      <div>
        <Timer.Seconds /> seconds
      </div>
      
      
      <div>
        <button onClick={start}>Start</button>
        <button onClick={resume}>Resume</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )}
</Timer>
</div>
)

}

export default Timerz