import React from 'react'
import "../styles/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  return (
    <header>
        <div className="headerController">
          <div className='logo'>
            <img src="ecommerce.png" alt="logo" className='logoImg'/>
            <h1 className='title'>UlianCRUD</h1>
          </div>
            <Link to={"/create"}>
              <input type="image" src='create.png' className='createIcon'> 
              </input>
            </Link>
        </div>
    </header>
  )
}

export default Navbar