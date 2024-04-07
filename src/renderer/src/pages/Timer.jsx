import './Timer.css'
const Timer = () => {
  return (
    <div>
      <h1>Timer</h1>
      <div className="group">
        <div className="group-item">
          <label className="group-label">Hours</label>
          <input className="group-input" type="number" value={0} />
        </div>
        <div className="group-item">
          <label className="group-label">Minutes</label>
          <input className="group-input" type="number" value={0} />
        </div>
        <div className="group-item">
          <label className="group-label">Seconds</label>
          <input className="group-input" type="number" value={0} />
        </div>
      </div>
      <button>Start</button>
    </div>
  )
}

export default Timer
