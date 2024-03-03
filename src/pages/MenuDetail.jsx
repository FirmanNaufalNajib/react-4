import axios from 'axios'
import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'



const MenuDetail = () => {

  const [menu, SetMenu] = useState({});
  const {id} = useParams()

  // const param = useParams();
  // console.log(param.id)

  const getDetailMenuData = () => {  
    axios
    .get(`https://api.mudoapi.tech/menu/${id}`)
    .then( (res) => SetMenu(res.data.data))
    .catch( (err) => console.log(err))
  } 

  const handleDelete = () => {
    const token = localStorage.getItem('access_token')
    const config = {
      header: {
        Authorization: `Bearer ${token}`
      },
    };
    
    axios
    .delete(`https://api.mudoapi.tech/menu/${id}`, config)
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }

  const handleEdit = () => {
    const token = localStorage.getItem('access_token')
    const config = {
      header: {
        Authorization: `Bearer ${token}`
      },
    };
    
    axios
    .delete(`https://api.mudoapi.tech/menu/${id}`, config)
    .then((res) => console.log(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDetailMenuData();
  }, [])

  return (
    <div>
      <h1>Menu Detail</h1>
      <h2>{menu.name}</h2>
      <img src={menu.imageUrl} width={'200px'}/>
      <p>{menu.description}</p>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleEdit}>EDIT</button>

    </div>
  );
};

export default MenuDetail