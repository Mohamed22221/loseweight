import React from 'react';
import { useState } from 'react';
import "./NavBar.css"
import Logo from '../img/download.png';
function NavBar() {
    const [click, useClick] = useState(false)
    const HandelClick = () => {useClick(!click)}
    const Close= () => {useClick(false)}


    return <nav className='nav-bar'>
        <div className='container'>
        <div className='content-nav '>
            

            
            {/*start links navbar*/}
            <a href="/cryptocurrncy/" className='logo' onClick={Close}>
                loseWeight
            
            </a>
                <ul className={click ? 'nav-menue active' : "nav-menue"}>
                
                <li className='nav-items'>
                    <a href='#Home'  onClick={Close}>Home</a>
                </li>
            
                <li className='nav-items'>
                    <a href='#Blog' onClick={Close}>Blog</a>
                </li>
                <li className='nav-items'>
                    <a href="#About" onClick={Close}>About</a>
                </li>
                <li className='nav-items'>
                    <a href="#Service" onClick={Close}>Service</a>
                </li>
                <li className='nav-items'>
                    <a href="#Buy" onClick={Close}>Buy</a>
                </li>
                
                
                </ul>
                     
            {/*end links navbar*/}     
               
          
             {/*start nav-icon'*/}
            <div className='nav-icon' onClick={HandelClick}>
                {click ? <i className= "fa-solid fa-x"></i> :<i className="fa-solid fa-align-justify"></i>}
            </div>
             {/*start nav-icon'*/}
             </div>
        </div>
    </nav>;
}

export default NavBar;
