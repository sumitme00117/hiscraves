import React from 'react'
import banner from '../images/image 1.png'
import cat1 from '../images/cat1.png'
import cat2 from '../images/cat2.png'
import cat3 from '../images/cat3.png'
import cat4 from '../images/cat4.png'
import cat5 from '../images/cat5.png'
import cat6 from '../images/cat6.png'
import baggy from '../images/image2.png'
import winter from '../images/image3.png'
import womens from '../images/image4.png'
import best from '../images/image5.png'
import trendy from '../images/image6.png'

const Products = () => {
  return (
    <div>
      <img src={banner} className="banner" alt="img" />
      <div className="categories">
        <div className="cat1">
            <img src={cat1} alt="img" id="mens-tshirt" className="items"/>
            <p id="mens">Men's T-Shirts</p>
        </div>
        <div className="cat1">
        <img src={cat2} alt="img" id="womens-wear" className="items"/>
            <p id="women">Women's Wear</p>
        </div>
        <div className="cat1">
        <img src={cat3} alt="img" id="winter-collection" className="items"/>
            <p id="winter">Winter Collections</p>
        </div>
        <div className="cat1">
        <img src={cat4} alt="img" id="hooded" className="items"/>
            <p id="hooded">Hooded T-Shirts</p>
        </div>
        <div className="cat1">
        <img src={cat5} alt="img" id="neck" className="items"/>
            <p id="polo">Polo Neck T-Shirts</p>
        </div>
        <div className="cat1">
        <img src={cat6} alt="img" id="sleeve" className="items"/>
            <p id="full">Full Sleeve T-Shirts</p>
        </div>
        </div>
        <div className="categories-2">
            <div className="baggy">
                <img id="baggy-1" src={baggy} alt="img" />
                <img id="baggy-2" src={winter} alt="img" />
            </div>
            <div className="womens">
                <img src={womens} alt="img" />
                <img id="best" src={best} alt="img" />
                <img id="trendy" src={trendy} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Products
