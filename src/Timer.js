
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
      
      
      <div className="btn-group">
        <button className="btn btn-dark btn-sm" onClick={start}>Start</button>
        <button className="btn btn-dark btn-sm" onClick={resume}>Resume</button>
        <button className="btn btn-dark btn-sm" onClick={stop}>Stop</button>
        <button className="btn btn-dark btn-sm" onClick={reset}>Reset</button>
      </div>
    </>
  )}
</Timer>
</div>
)

}

export default Timerz