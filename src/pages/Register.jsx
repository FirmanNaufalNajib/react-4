import Navbar from "../components/Navbar"
import './pages.css'

const Register = () => {

  return(

    <>
    <Navbar/>
    <h1 id="register-title">Register</h1>
    <div id="register">
    <input type="text" placeholder="Nama Lengkap"></input>
    <input type="email" placeholder="Alamat Email"></input>
    <input type="text" placeholder="Username"></input>
    <input type="text" placeholder="Passsword"></input>
    <input type="text" placeholder="Re-Password"></input>

    <button>Submit</button>
    </div>
    </>
    


  )
}

export default Register