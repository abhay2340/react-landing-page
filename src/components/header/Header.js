import React from 'react'
import './Header.css'
import image from '../../images/image-hero-desktop.png'
import imgone from '../../images/client-databiz.svg'
import imgtwo from '../../images/client-maker.svg'
import imgthree from '../../images/client-audiophile.svg'
import imgfour from '../../images/client-meet.svg'

function Header() {
  return (
    <div className='header'>
    <div className='left'>
      <h1>Make <br/> remote wrok</h1>
      <p>navigable address as the href value. If you cannot provi
de a valid href, but still need the element to resemble a link, use a butt
on and change it with appropriate styles. 
      </p>
      <button type='button'>Learn more</button>
      <div className='sponsers'>
      <img src={imgone}></img>
      <img src={imgtwo}></img>
      <img src={imgthree}></img>
      <img src={imgfour}></img>
      </div>
    </div>
    <div className='right'><img src={image}></img></div>

    </div>
  )
}

export default Header