import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <header>
        <div className="headerController">
            <img src="ecommerce.png" alt="logo" className='logo'/>
            <h1 className='title'>Ulian CRUD</h1>
        </div>
    </header>
  )
}

export default Navbar