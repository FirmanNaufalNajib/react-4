import Navbar from "../components/Navbar"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './pages.css'

const Menu = () => {

  const [menu, setMenu] = useState([])
  const [pagination, setPagination] = useState({
    perPage: 5,
    total: 2,
    currentPage: 1,
    previousPage: 0,
    nextPage: 0
  })


  const getMenuData = () => {
    axios
    .get(`https://api.mudoapi.tech/menus?page=${pagination.currentPage}`)
    .then((res) => {
      setMenu(res.data.data.Data)
      setPagination({
        perPage: res.data.data.perPage,
        total: res.data.data.total,
        currentPage: res.data.data.currentPage,
        previousPage: res.data.data.previousPage,
        nextPage: res.data.data.nextPage
      })
    })
    .catch((err) => console.log(err))
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.previousPage,
    })
  }

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.nextPage,
    })
  }

  useEffect(() => {
    getMenuData();
  }, [])

  useEffect(() => {
    getMenuData();
  }, [pagination.currentPage])



  return (
    <div>
      <Navbar/>
      <h1>Menu</h1>
      {menu.map( (item) => 
      <div id="container-menu">
        <div id="menu-page">
        <h2>{item.name}</h2>
        <img width={'150px'} src={item.imageUrl}/>
        <p>{item.description}</p>
        <Link to={`/menu/${item.id}`}>
        <button>Detail</button>
        </Link>       
        </div> 
      </div>
    
      )}

        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Menu