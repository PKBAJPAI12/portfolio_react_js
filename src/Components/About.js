import React,{useContext} from "react";
import { AppContext } from "../AppContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css";
function About() {
  const {page}=useContext(AppContext);
  return (
    <>
    <Navbar/>
    <div style={{minHeight: "100vh",marginTop: "8rem"}} className="about">
      <div id="aboutsection">
        <div id="aboutsummary">
          <a name="about">
            <h1>Hi I'm Prateek 💻</h1>
          </a>
          <p style={{color:page?"#868e96":"gold"}}>
            A passionate Web Developer 🚀 experienced in building Full-Stack
            applications with a focus on maintaining databases and
            infrastructure server-side code.
          </p>

          <div className="aboutlink">
            <a href="https://github.com/PKBAJPAI12" target="_blank">
              <img src={page?require('../Assets/github.png'):require('../Assets/github (1).png')} alt="" srcset="" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
            >
              <img src={require('../Assets/linkedin.png')} alt="" srcset="" />
            </a>
            <a
              href="https://www.hackerrank.com/prateek_dme_dite"
              target="_blank"
            >
              <img src={require("../Assets/hackerrank.png")} alt="" srcset="" />
            </a>
            <a href="https://www.leetcode.com/pkbajpai123/" target="_blank">
              <img src={require("../Assets/leetcode.png")} alt="" srcset="" />
            </a>
            <a href="https://twitter.com/PKbajpai123" target="_blank">
              <img src={require("../Assets/twitter.png")} alt="" srcset="" />
            </a>
          </div>
          <div class="aboutbutton">
            <a
              href="https://drive.google.com/file/d/1mrO7lltaDPJNrzOQqQ7Avc-dn8mwijBW/view?usp=sharing"
              target="_blank"
            >
      
              <button className={page?"btnl":"btn"} style={{ marginRight: "1rem"}}>Resume</button>
            </a>

            <a href="#contact">
        
              <button
              className={page?"btnl":"btn"}
                style={{
                  borderBottomLeftRadius: "2em",
                  borderTopLeftRadius: "0em",
                  borderTopRightRadius: "2em",
                  borderBottomRightRadius: "0em"
                }}
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="aboutimage">
        <img src={require('../Assets/Home Design.png')} alt="" />
      </div>
    </div>
    </>
  );
}
export default About;
