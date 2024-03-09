import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link className='' to="/text" >Home</Link></li>
      <li><Link className='' to="/text" >About Us</Link></li>
      <li><Link className='' to="/text" >Contact Us</Link></li>
      <li><Link className='' to="/text" >Login</Link></li>
      <li><Link className='' to="/text" >Sign Up</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Foodilivery</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal ">
      <li><Link className='' to="/text" >Home</Link></li>
      <li><Link className='' to="/text" >About Us</Link></li>
      <li><Link className='' to="/text" >Contact Us</Link></li>
      <li><Link className='' to="/text" >Login</Link></li>
      <li><Link className='' to="/text" >Sign Up</Link></li>

      {/* <li><Link to="/" >Item 3</LIn></li> */}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
  )
}

export default NavBar