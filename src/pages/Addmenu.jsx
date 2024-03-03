import './pages.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import axios from 'axios'
const Addmenu = () => {
  const [menu, setMenu] = useState(
    {
    name:"",
    description:"",
    type:"main-dish",
    imgUrl:"",
    price:"",
  }
  )

  const handleChange = (e) => {
    setMenu({
      ...menu, 
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("test")
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const payload = {
      name: menu.name,
      description: menu.description,
      imageUrl: menu.imgUrl,
      price: parseInt(menu.price),
      type: menu.type,
    }

    axios 
    .post("https://api.mudoapi.tech/menu", payload, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }

  


console.log(menu)

  return (

    <Layout>
    <div id="addmenu">
      <h1>addmenu</h1>
    <input 
    onChange={handleChange}
    type="text" 
    placeholder="name" 
    name="name"/>
    <input 
    onChange={handleChange}
    type="text" 
    placeholder="description" 
    name="description"/>

    <select 
    onChange={handleChange}
    placeholder="type" 
    name="type">
      <option value="beverage">minuman</option>
      <option value="main-dish">makanan</option>
    </select>

    <input 
    onChange={handleChange}
    type="text" 
    placeholder="imgUrl" 
    name="imgUrl"/>
    <input 
    onChange={handleChange}
    type="text" 
    placeholder="price" 
    name="price"/>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    </Layout>

  )
}

export default Addmenu