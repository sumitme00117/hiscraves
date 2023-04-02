import React from 'react'
import image1 from '../images/image-1.png'
import image2 from '../images/image-2.png'
import image3 from '../images/image-3.png'
import image4 from '../images/image-4.png'
import h1 from '../images/h1.png'
import h2 from '../images/h2.png'
import h3 from '../images/h3.png'

const Cards = () => {
  return (
    <>
    <div className="card-items">

    
    <div id="card1" className="cards">
        <div className="back-img">
        <img src={image1} alt="img" />
        <div className="content">
        <img src={h1} alt="" className="h1"/>
        <img src={h2} alt="" className="h1"/>
        <img src={h3} alt="" className="h1"/>
        </div>
        </div>
        <p className="para1">Men Henley Neck</p>
        <p className="para2">Full Sleeve Red Wine</p>
        <span className="discount">₹399</span>
        <s className="price">₹1299</s><br />
        <button className="btn" id="small">S</button>
        <button className="btn">M</button>
        <button className="btn">L</button>
        <button className="btn">XL</button>
        <button className="btn">XXL</button>
        
    </div>
    <div id="card2" className="cards">
    <div className="back-img">
        <img src={image2} alt="img" />
        <div className="content">
        <img src={h1} alt="" className="h1"/>
        <img src={h2} alt="" className="h1"/>
        <img src={h3} alt="" className="h1"/>
        </div>
        </div>
        <p className="para1">Men Henley Neck</p>
        <p className="para2">Full Sleeve Red Wine</p>
        <span className="discount">₹399</span>
        <s className="price">₹1299</s><br />
        <button className="btn" id="small">S</button>
        <button className="btn">M</button>
        <button className="btn">L</button>
        <button className="btn">XL</button>
        <button className="btn">XXL</button>
        
    </div>
    <div id="card3" className="cards">
    <div className="back-img">
        <img src={image3} alt="img" />
        <div className="content">
        <img src={h1} alt="" className="h1"/>
        <img src={h2} alt="" className="h1"/>
        <img src={h3} alt="" className="h1"/>
        </div>
        </div>
        <p className="para1">Men Henley Neck</p>
        <p className="para2">Full Sleeve Red Wine</p>
        <span className="discount">₹399</span>
        <s className="price">₹1299</s><br />
        <button className="btn" id="small">S</button>
        <button className="btn">M</button>
        <button className="btn">L</button>
        <button className="btn">XL</button>
        <button className="btn">XXL</button>
        
    </div>
    <div id="card4" className="cards">
    <div className="back-img">
        <img src={image4} alt="img" />
        <div className="content">
        <img src={h1} alt="" className="h1"/>
        <img src={h2} alt="" className="h1"/>
        <img src={h3} alt="" className="h1"/>
        </div>
        </div>
        <p className="para1">Men Henley Neck</p>
        <p className="para2">Full Sleeve Red Wine</p>
        <span className="discount">₹399</span>
        <s className="price">₹1299</s><br />
        <button className="btn" id="small">S</button>
        <button className="btn">M</button>
        <button className="btn">L</button>
        <button className="btn">XL</button>
        <button className="btn">XXL</button>
        
    </div>
    </div>
    </>
  )
}

export default Cards
