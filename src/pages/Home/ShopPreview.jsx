import React from 'react'
import bag1 from '../../assets/coffeeBags/bag1.jpg'
import bag2 from '../../assets/coffeeBags/bag2.jpg'
import bag3 from '../../assets/coffeeBags/bag3.jpg'
import bag4 from '../../assets/coffeeBags/bag4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './ShopPreview.css'

const previewImages = [
    {src: bag1, name: 'Signature Roast', price: '$16.99', key: 'SR1699'},
    {src: bag2, name: 'Marágo Moonlight Roast', price: '$17.99', key: 'MM1799'},
    {src: bag3, name: 'Decaf', price: '$15.99', key: 'D1599'},
    {src: bag4, name: 'Red Seal Espresso', price: '$17.99', key: 'RS1799'}
]

const ShopPreview = () => {
  return (
    <>
    <div id='shop-preview'>
        {previewImages.map(image => {
            return(
            <div key={image.key} className='underlay'>
                <img src={image.src} className='coffee-bag-img'/>
                <div className='overlay'>
                    <h3 className='heavy'>{image.name}</h3>
                    <h4 className='heavy'>{image.price}</h4>
                    <div>
                        <FontAwesomeIcon icon={faCartShopping} className='shop-icon shop-cart'/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='shop-icon'/>
                    </div>
                </div>
            </div>)
        })
        } 
    </div>
    <p id='shop-now-button'>Shop Now →</p>
    </>
    
  )
}

export default ShopPreview