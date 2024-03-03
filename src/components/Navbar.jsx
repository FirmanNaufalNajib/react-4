import { Link } from "react-router-dom"
import './navbar.css'


const Navbar = () => {
  return (
    <div id="navbar" style={{display: "flex", gap: "20px"}}>
      <Link to="/">
      <h5>Home</h5>      
      </Link>
      <Link to="/menu">
      <h5>Menu</h5>      
      </Link>
      <Link to="/login">
      <h5>Login</h5>      
      </Link>
      <Link to="/register">
      <h5>Register</h5>      
      </Link>
      <Link to="/addmenu">
      <h5>Addmenu</h5>      
      </Link>


    </div>
  )
}

export default Navbar