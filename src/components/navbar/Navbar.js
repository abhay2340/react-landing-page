import {useState} from 'react'
import './Navbar.css'
import logo from '../../images/logo.svg'
import { TfiAngleDoubleDown,TfiAngleDoubleLeft } from "react-icons/tfi";
import { FiChevronDown,FiChevronUp } from "react-icons/fi";
// import { FaBeer } from 'react-icons/fa';

function Navbar() {
  const [toggle,setToggle]=useState(false)
  const [togglecomp,setToggleComp]=useState(false)
  const [togglecar,setToggleCar]=useState(false)
  return (
    <>
    <div className='navbar'>
        <img src={logo} id="logo"></img>
      <div className='navbar-links'>
        <p><a href='#'>Features</a></p>
        <p><a href='#'>Company</a> <p>{togglecomp?<FiChevronUp className='up' onClick={()=>{setToggleComp(false)}}/>:<FiChevronDown onClick={()=>{setToggleComp(true)}}/>} {togglecomp&&(
        <div className='company-dropdown'>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          </div>
        )}</p></p>
        <p><a href='#'>Careers</a> <p>{togglecar?<FiChevronUp className='up' onClick={()=>{setToggleCar(false)}}/>:<FiChevronDown onClick={()=>{setToggleCar(true)}}/>} {togglecar&&(
        <div className='car-dropdown'>
          <p>HOME</p>
          <p>HOME</p>
          <p>HOME</p>
          </div>
        )}</p></p>
        <p><a href='#'>About</a> </p>
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