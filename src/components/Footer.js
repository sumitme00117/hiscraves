import React from 'react'
import social from '../images/social.PNG'
import phone from '../images/phone.png'
import mail from '../images/mail.PNG'
import map from '../images/map.PNG'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="para">
            <p id="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ex necessitatibus rerum accusantium, veniam nostrum esse fuga magni tenetur, sint quas a obcaecati molestiae. Quas vero magni, nihil quasi tenetur illum commodi nostrum molestias.</p>
            <img src={social} alt="" />
        </div>
        <div className="online">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li>Men's T-Shirts</li>
            <li>Women's Wear</li>
            <li>Winter Collections</li>
            <li>Hooded T-Shirts</li>
            <li>Streetwear Collections</li>
          </ul>
        </div>
        <div className="customer">
          <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Shipping & Returns Policy</li>
            <li>Cancellation & Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="store">
          <h3>STORE INFORMATION</h3>
          <ul>
            
            <li className="info" id="tex"><img src={map} alt="img" className="imgs"/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            
            <li className="info" id="cll"><img src={phone} alt="img" className="imgs"/>Call Us: 1234567890</li>
            
            <li className="info" id="imsg"><img src={mail} alt="img" className="imgs"/> Email Us: info@yourmail.com</li>
          </ul>
        </div>
    </div>
    <div className="copywrite">
      <p>&#169; 2022-23 Powered By dummy team</p>
    </div>
    </>
  )
}

export default Footer
