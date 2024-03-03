import Layout from "../components/Layout"
import {Link, useNavigate} from "react-router-dom"


const Home = () => {
const access_token = localStorage.getItem('access_token')
const navigate = useNavigate()

  console.log(access_token)

const logout = ()=> {
  localStorage.removeItem("access_token")
  navigate("/login")
 }

  return (
    <Layout>
      
      {
      access_token ? (<button onClick={logout}>Logout</button>) : (<Link to={"/login"}><h1>Login</h1></Link>)
      }
      <h1>Ini Home Page</h1>
    </Layout>
  )
}

export default Home