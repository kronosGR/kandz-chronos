import { useState, useEffect } from 'react'

import './Timer.css'
const Timer = () => {
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)
  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const startTimer = () => {
    setIsPaused(false)
    setIsStarted(!isStarted)
    setTime(Number(hours * 3600) + Number(mins * 60) + Number(secs))
  }

  useEffect(() => {
    if (isStarted && !isPaused) {
      let intervalId = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            clearInterval(intervalId)
            setIsStarted(false)
            return 0
          } else return time - 1
        })
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [isStarted, isPaused])
  return (
    <div>
      <h1>Timer</h1>
      <div className="group">
        <div className="group-item">
          <label className="group-label">Hours</label>
          <input
            className="group-input"
            type="number"
            value={hours}
            min="0"
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div className="group-item">
          <label className="group-label">Minutes</label>
          <input
            className="group-input"
            type="number"
            value={mins}
            max="59"
            min="0"
            onChange={(e) => setMins(e.target.value)}
          />
        </div>
        <div className="group-item">
          <label className="group-label">Seconds</label>
          <input
            className="group-input"
            type="number"
            value={secs}
            min="0"
            max="59"
            onChange={(e) => setSecs(e.target.value)}
          />
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={startTimer}>
          {isStarted ? 'Stop' : 'Start'}
        </button>
        <button type="button" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? 'Unpause' : 'Pause'}
        </button>
      </div>
      <div className="timer">{time}</div>
    </div>
  )
}

export default Timer
