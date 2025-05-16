import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
        <div className="headerController">
          <Link to={"/"} className='logo'>
            <img src="ecommerce.png" alt="logo" className='logoImg'/>
            <h1 className='title'>UlianCRUD</h1>
          </Link>
          <Link to={"/create"}>
            <input type="image" src='create.png' className='createIcon'/>            
          </Link>
        </div>
    </header>
  )
}

export default Navbar