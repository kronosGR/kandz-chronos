import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Stop Watch</Link>
      <Link to="/timer">Timer</Link>
    </div>
  )
}

export default Navbar
