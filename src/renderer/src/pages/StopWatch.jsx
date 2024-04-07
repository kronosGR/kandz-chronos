import { useState, useEffect } from 'react'

import './StopWatch.css'
import TimerToString from '../components/TimerToString'
const StopWatch = () => {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerList, setTimerList] = useState([])
  const [list, setList] = useState(null)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(timer + 1)
      }, 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, timer])

  useEffect(() => {
    let list = () => (
      <>
        {timerList.map((el, index) => (
          <TimerToString timer={timer} newTimer={el} key={index} />
        ))}
      </>
    )
    setList(list)
  }, [timerList])

  const startStop = () => {
    setIsRunning(!isRunning)
    if (isRunning) {
      setTimerList([...timerList, timer])
    }
  }

  const reset = () => {
    setTimer(0)
  }

  const emptyList = () => {
    setList(null)
    setTimerList([])
  }

  return (
    <div className="stop-watch">
      <h1 id="title">Stopwatch</h1>
      <div className="content-timer">
        <button type="button" onClick={startStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <div id="timer">
          <TimerToString timer={timer} />
        </div>
        <button type="button" onClick={reset} disabled={isRunning}>
          Reset
        </button>
      </div>
      <div className="timers">
        <div>
          {list}
          {timerList.length > 0 && (
            <button type="button" onClick={emptyList} id="empty-list">
              Empty List
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default StopWatch
