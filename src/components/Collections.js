import React from 'react'
import cat4 from '../images/cat4.png'
import image3 from '../images/image-3.png'
import image5 from '../images/image-5.png'
import image6 from '../images/image-6.png'
import image7 from '../images/image-7.png'
import image8 from '../images/image-8.png'
import banner2 from '../images/banner2.png'
import diamond from '../images/diamond1.png'
import discount from '../images/discount1.png'
import return1 from '../images/return.png'
import quality from '../images/quality.png'
import safe from '../images/safe.png'
import helpline from '../images/helpline.png'

const Collections = () => {
  return (
    <>
    <div className="collections">
        <div className="cards-1">
            <img src={cat4} alt="" id="streetwear"/>
            <div className="context">
                <p>Streetwear collections</p>
            </div>
        </div>
        <div className="cards-2">
            <img src={image3} alt="" id="striped"/>
            <div className="context">
                <p>Striped T-Shirts</p>
            </div>
        </div>
        <div className="cards-3">
            <img src={image5} alt="" id="round-neck"/>
            <div className="context">
                <p>Round Neck T-Shirts</p>
            </div>
        </div>
    </div>
    <div className="collections">
    <div className="cards-1 first">
        <img src={image6} alt="" id="streetwear" className="printed"/>
        <div className="context">
            <p>Printed T-Shirts</p>
        </div>
    </div>
    <div className="cards-2 second">
        <img src={image7} alt="" id="striped" className="oversized"/>
        <div className="context">
            <p>Oversized T-Shirts</p>
        </div>
    </div>
    <div className="cards-3 third">
        <img src={image8} alt="" id="round-neck" className="halfsleeves"/>
        <div className="context">
            <p>HalfSleeves T-Shirts</p>
        </div>
    </div>
    
</div>
<div className="loose">
      <img src={banner2} alt="img" loading="lazy"/>
    </div>
    <div className="two-cards">
      <div className="d-card1">
        <img src={diamond} alt="img" id="diamond"/>
        <h4>Hurry Up!</h4>
        <h3 className="percent">85% OFF</h3>
        <h3 className="sale">Sale</h3>
        <button className="shop">SHOP NOW</button>
      </div>
      <div className="d-card2">
        <img src={discount} alt="img" id="discount" />
        <h4>Hurry Up!</h4>
        <h3 className="percent">75% OFF</h3>
        <h3 className="sale">Sale</h3>
        <button className="shop">SHOP NOW</button>
      </div>
    </div>
    <div className="rectangle">
      <div className="return">
        <img src={return1} alt="" />
        <p>7 Days Return</p>
      </div>
      <div className="return">
        <img src={quality} alt="" />
        <p>Quality Products</p>
      </div>
      <div className="return">
        <img src={safe} alt="" />
        <p>Safe Payment</p>
      </div>
      <div className="return">
        <img src={helpline} alt="" />
        <p>24X7 Helpline</p>
      </div>
    </div>
    <div className="subscribe">
      <div className="subs">
        <p>Subscribe to get updates on exciting offer</p>
        <p className="deals">& deals</p>
      </div>
      <div className="input">
        <input type="text" placeholder="Ener your email" className="input-field"/>
        <button className="subscb">Subscribe</button>
      </div>
    </div>
    <hr className="hozt"/>
</>
  )
}

export default Collections
