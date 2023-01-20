import {useState} from 'react'
import './Navbar.css'
import logo from '../../images/logo.svg'
import { TfiAngleDoubleDown,TfiAngleDoubleLeft } from "react-icons/tfi";
// import { FaBeer } from 'react-icons/fa';

function Navbar() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <div className='navbar'>
        <img src={logo} id="logo"></img>
      <div className='navbar-links'>
        <p><a href='#'>Features</a></p>
        <p><a href='#'>Comaony</a></p>
        <p><a href='#'>Careers</a></p>
        <p><a href='#'>About</a></p>
      </div>
      <div className='signin-toggle'>
      <div className='navbar-signin'>
        <p><a href='#'>Login</a></p>
        <button type='Button'>Sign Up</button>
      </div>
      <div className='react-icons'>
        {
          toggle?<TfiAngleDoubleDown onClick={()=>setToggle(false)}/>:<TfiAngleDoubleLeft onClick={()=>setToggle(true)}/>
        }
        {
          toggle&&(
            <div className='navbar-links-toggle'>
        <p><a href='#'>Features</a></p>
        <p><a href='#'>Comaony</a></p>
        <p><a href='#'>Careers</a></p>
        <p><a href='#'>About</a></p>
      </div>
          )
        }
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar