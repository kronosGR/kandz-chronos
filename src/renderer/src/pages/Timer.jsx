import { useState, useEffect } from 'react'

import './Timer.css'
import alarm from '../assets/alarm.mp3'
const Timer = () => {
  const audio = new Audio(alarm)
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [secs, setSecs] = useState(0)
  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const startTimer = () => {
    audio.pause()
    audio.currentTime = 0
    setIsPaused(false)
    setIsStarted(!isStarted)
    setTime(Number(hours * 3600) + Number(mins * 60) + Number(secs))
  }

  const handleOnChange = (e, item) => {
    console.log(item)
    switch (item) {
      case 'hours':
        setHours(e.target.value)
        localStorage.setItem('hours', e.target.value)
        break
      case 'mins':
        setMins(e.target.value)
        localStorage.setItem('min', e.target.value)
        break
      case 'secs':
        setSecs(e.target.value)
        localStorage.setItem('secs', e.target.value)
        break

      default:
        break
    }
  }

  const TimeToString = ({ timer }) => {
    let time = timer
    const hours = Math.floor(time / 3600)
    const mins = Math.floor((time % 3600) / 60)
    const secs = Math.floor(time % 60)

    return (
      <div className="timer-text">
        {hours}:{mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
      </div>
    )
  }

  useEffect(() => {
    if (isStarted && !isPaused) {
      let intervalId = setInterval(() => {
        setTime((time) => {
          if (time === 0) {
            audio.volume = 1
            audio.play()
            clearInterval(intervalId)
            setIsStarted(false)

            return 0
          } else return time - 1
        })
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [isStarted, isPaused])

  useEffect(() => {
    setHours(localStorage.getItem('hours') || 0)
    setMins(localStorage.getItem('mins') || 0)
    setSecs(localStorage.getItem('secs') || 0)
  }, [])

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
            onChange={(e) => handleOnChange(e, 'hours')}
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
            onChange={(e) => handleOnChange(e, 'mins')}
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
            onChange={(e) => handleOnChange(e, 'secs')}
          />
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={startTimer} disabled={hours == 0 && mins == 0 && secs == 0}>
          {isStarted ? 'Stop' : 'Start'}
        </button>
        <button type="button" onClick={() => setIsPaused(!isPaused)} disabled={!isStarted}>
          {isPaused ? 'Unpause' : 'Pause'}
        </button>
      </div>
      <div className="timer">
        <TimeToString timer={time} />
      </div>
    </div>
  )
}

export default Timer
