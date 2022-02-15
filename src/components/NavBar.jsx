import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <div className="container">

        <Link to='/Peliculas' class='nav'>Personajes</Link>
       
        <Link to='/Ecommerce' class='nav'>Ecommerce</Link>
        <hr />
    </div>
  )
}

export default Navbar