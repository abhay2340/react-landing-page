import React from 'react'
import './Header.css'
import image from '../../images/image-hero-desktop.png'

function Header() {
  return (
    <div className='header'>
    <div className='left'>
      <h1>Make remote wrok</h1>
      <p>navigable address as the href value. If you cannot provi
de a valid href, but still need the element to resemble a link, use a butt
on and change it with appropriate styles. 
      </p>
    </div>
    <div className='right'><img src={image}></img></div>

    </div>
  )
}

export default Header