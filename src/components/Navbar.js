import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// import Textform from './Textform';


export default function Navbar(props) {

  function toggleOnOff(){
    const icon = document.getElementById("toggle-icon");
    // console.log(icon);
    const classes = Array.from(icon.classList);
    // console.log(classes);

    if(classes.includes("fa-toggle-on")){
      icon.classList.remove("fa-toggle-on");
      icon.classList.add("fa-toggle-off");
    }
    else{
      icon.classList.remove("fa-toggle-off");
      icon.classList.add("fa-toggle-on");
    }

  }

  return (
    <>
      <nav className={`flex p-2 items-center justify-between leading-6 ${props.mode === "light" ? "bg-slate-100" : "bg-[#161c1c]"} ${props.mode === "light" ? "text-black" : "text-white"}`}>
        <div className="left flex items-center">
          <div className="logo ml-4 text-lg xs:text-2xl font-bold"><Link to='/'>{props.title}</Link></div>
          <ul className='flex px-4 text-center text-lg'> 
            <li className='px-2'> <Link to='/'>Home</Link> </li>
            <li className='px-2'> <Link to='/about'>About</Link> </li>
          </ul> 
        </div>
        {/* <div className="search">
          <span className='px-2'><input type="text" placeholder='search' className='border-black border rounded-sm outline-none py-1 px-2' /></span>
          <button className='mr-4 px-2 py-1 hover:bg-green-400 border-green-300 border rounded shadow-inner font-bold'>Search</button>
        </div> */}
        
        <div onClick={props.toggleMode} className="switchmode pr-4 group" >
          <i id='toggle-icon' onClick={toggleOnOff}  className='fa fa-toggle-off text-lg py-1 px-2 cursor-pointer'></i>
          <span onClick={toggleOnOff} className='hidden xs:inline-block cursor-pointer'>{props.mode === "light" ? "Enable" : "Disable"} darkmode</span>
        </div>
        
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: "Navbar"
}
