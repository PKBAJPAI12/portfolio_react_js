import React from 'react';
import logoImage from './Assets/sunny.png'
import './App.css';
function Navbar(){
    const imageStyle={
        width:'2rem'
    }
    const liStyle={
        marginLeft:'-1rem'
    }
    const liImage={
        display:'flex',
        alignItems: 'center'
    }
return (
    <>
    <div className="navbar h-nav">
        
            <ul className="navright v-class">
                <li><a href="#about">About</a></li>
                <li><a href="#skill">Skills</a></li>
                <li><a href="#project">Projects</a> </li>
                <li><a href="#certification">Certification</a></li>
                <li><a href="#experience">Work Experience</a></li>

                <li style={liImage}><img style={imageStyle} src={logoImage} alt=""
                        srcset="" /> </li>
                <li style={liStyle}> <a 
                        href="light.html">Light Mode</a></li>

            </ul>
        
        
    </div>
    <div className="hamburger">
        <div id="line1"></div>
        <div id="line2"></div>
        <div id="line3"></div>

    </div>
    <div className="navleft">
        <h1>&#60; &nbsp; <span style={{fontFamily: 'The Nautigal cursive'}}>Prateek Bajpai &nbsp;</span> &#47; &#62;</h1>
    </div>
    </>
);
}
export default Navbar;