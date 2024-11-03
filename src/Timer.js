
import Timer from "react-compound-timerv2-ocuco"
import React from "react"

function Timerz() {

  
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