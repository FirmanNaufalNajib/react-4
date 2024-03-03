import axios from "axios"
import Navbar from "../components/Navbar"
import {useState} from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {

  const[username, setUsername] = useState("")
  const[password, setPassword] = useState("")
  const[notif, setNotif] = useState("")
  const[loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleUserPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    }
  
  setLoading(true)

    axios
    .post("https://api.mudoapi.tech/login", payload)
    .then((res) => {
      setNotif("login berhasil")
      console.log(res)
      const token = res?.data?.data?.token
      localStorage.setItem("access_token", token)
      setLoading(false)
      setTimeout(() => {navigate("/menu")}, 1000)    
    }
    )
    .catch((err) => {
      setLoading(false)
      console.log(err)
      setNotif(err.response.data.message)

      })
  };




  return (
    <>
    <Navbar/>

    <h1>Lohin</h1>
    
    {!!notif.length && <h1>{notif}</h1>}

    <input type="text" placeholder="username" onChange={handleUsernameChange} value={username} ></input>
    <input type="password" paceholder="password" onChange={handleUserPassword} value={password} ></input>

    <button disabled={loading ? true : false} onClick={handleLogin}>{loading ? 'Loading..' : 'Login'}</button>

    <p onClick={() => navigate(-1)}>BACK</p>

    </>


  )
}

export default Login