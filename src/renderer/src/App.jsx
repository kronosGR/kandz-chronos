import './App.css'
import Navbar from './components/Navbar'
import StopWatch from './pages/StopWatch'
function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <div className="content">
      <h1 id="title">Chronos</h1>
      <StopWatch />
      <Navbar />
    </div>
  )
}

export default App
