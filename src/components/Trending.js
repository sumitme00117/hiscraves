import React from 'react'
import Cards from './Cards'
import banner from '../images/banner1.png'

const Trending = () => {
  return (
    <div>
        <div className="horizontal">
        <h2><span>Trending T-Shirts</span></h2>
        </div>
    
     <Cards></Cards>
     <Cards></Cards>
     <div className="button">
        <button className="view">VIEW ALL</button>
     </div>

     <div className="horizontal">
        <h2><span>Featured Products</span></h2>
        </div>
        <Cards></Cards>
        <div className="button">
        <button className="view">VIEW ALL</button>
     </div>
     <div className="banner-1">
        <img src={banner} alt="img" />
     </div>
     <div className="horizontal">
        <h2><span>New Products</span></h2>
        </div>
        <Cards></Cards>
        <div className="button">
        <button className="view">VIEW ALL</button>
     </div>
     <div className="horizontal">
        <h2><span>Best Selling Products</span></h2>
        </div>
        <Cards></Cards>
        <div className="button">
        <button className="view">VIEW ALL</button>
     </div>
    </div>
  )
}

export default Trending
