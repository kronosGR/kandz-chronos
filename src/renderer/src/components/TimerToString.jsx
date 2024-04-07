const TimerToString = ({ timer, newTimer = 0 }) => {
  let time = 0
  time = newTimer == 0 ? (time = timer) : (time = newTimer)
  const hours = Math.floor(time / 360000)
  const mins = Math.floor((time % 360000) / 6000)
  const secs = Math.floor((time % 6000) / 100)
  const ms = time % 100

  return (
    <div>
      {hours}:{mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}:
      {ms.toString().padStart(2, '0')}
    </div>
  )
}

export default TimerToString
