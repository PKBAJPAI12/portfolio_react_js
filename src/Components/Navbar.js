import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const context=useContext(AppContext);
  const {page, updateState} = context;
  const imageStyle = {
    width: "2rem",
  };
  const liStyle = {
    marginLeft: "-1rem",
  };
  const liImage = {
    display: "flex",
    alignItems: "center",
  };
  const bodyBackgroundColor = "white";
  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  const handlePage = () => {
    console.log(page);
    updateState(!page);
  };
  return (
    <>
      {page && (
        <style>{`body { background-color: ${bodyBackgroundColor}; color: black; font-size: 24px; } body p{ color: #868e96;}  `}</style>
      )}
      {navOpen && (
        <div className="navbar">
          <ul className={page?'navrightl':'navright'}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#certification">Certification</a>
            </li>
            <li>
              <a href="#experience">Work Experience</a>
            </li>
            {/*page && (
              <>
                <li style={liImage}>
                  <img
                    style={imageStyle}
                    src={require(`../Assets/sun.png`)}
                    alt=""
                    srcset=""
                  />{" "}
                </li>
                <li onClick={handlePage} style={liStyle}>
                  Dark Mode
                </li>
              </>
            )*/}
            {/*!page && (
              <>
                <li style={liImage}>
                  <img
                    style={imageStyle}
                    src={require(`../Assets/sunny.png`)}
                    alt=""
                    srcset=""
                  />{" "}
                </li>
                <li onClick={handlePage} style={liStyle}>
                  Light Mode
                </li>
              </>
            )*/}
            {page?<li style={liImage}>
             <img
               style={imageStyle}
               src={require(`../Assets/sun.png`)}
               alt=""
               srcset=""
             />
           </li>: <li style={liImage}>
             <img
               style={imageStyle}
               src={require(`../Assets/sunny.png`)}
               alt=""
               srcset=""
             />
           </li>}
           {page?<li onClick={handlePage} style={liStyle}>
                  Dark Mode
                </li>:<li onClick={handlePage} style={liStyle}>
                  Light Mode
                </li>}s
          </ul>
        </div>
      )}
      {!navOpen && (
        <div className="navbar h-nav">
          <ul className={page?"navrightl v-class":"navright v-class"}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#certification">Certification</a>
            </li>
            <li>
              <a href="#experience">Work Experience</a>
            </li>
             {page?<li style={liImage}>
             <img
               style={imageStyle}
               src={require(`../Assets/sun.png`)}
               alt=""
               srcset=""
             />
           </li>: <li style={liImage}>
             <img
               style={imageStyle}
               src={require(`../Assets/sunny.png`)}
               alt=""
               srcset=""
             />
           </li>}
           {page?<li onClick={handlePage} style={liStyle}>
                  Dark Mode
                </li>:<li onClick={handlePage} style={liStyle}>
                  Light Mode
                </li>}
          </ul>
        </div>
      )}
      <div onClick={handleClick} className="hamburger">
        <div id={page?'line1l':'line1'}></div>
        <div id={page?'line2l':'line2'}></div>
        <div id={page?'line3l':'line3'}></div>
      </div>
      <div className={page?'navleftl':'navleft'}>
        <h1>
          &#60; &nbsp;
          <span style={{ fontFamily: "The Nautigal", fontStyle: "cursive" }}>
            Prateek Bajpai &nbsp;
          </span>
          &#47; &#62;
        </h1>
      </div>
    </>
  );
}
export default Navbar;
