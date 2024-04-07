import './App.css'
import Navbar from './components/Navbar'
import StopWatch from './pages/StopWatch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Timer from './pages/Timer'
function App() {
  //const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <BrowserRouter>
      <div className="content">
        <div className="pages">
          <Routes>
            <Route path="/" exact element={<StopWatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
