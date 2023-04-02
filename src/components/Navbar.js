import React from 'react'
import nav from '../images/nav.png'
import search from '../images/search.png'
import fav from '../images/fav.png'
import cart from '../images/cart.png'
import user from '../images/user.png'
import phone from '../images/phone.png'


const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="welcome">
        <p>Welcome to Our Store Hiscraves</p>
        <p className="call"><img src={phone} alt="" className="wel"/> Call Us: 1234567890</p>
        </div> 
        <div className="img">
            <img className="nav" src={nav} alt="img" />
            <div className="logo">Logo Here</div>
            <img className="image" src={user} alt="img" />
            <img className="image" src={cart} alt="img" />
            <img className="image"src={fav} alt="img" />
            <img className="image" src={search} alt="img" />
        </div>
    </div>
    </>
  )
}

export default Navbar
