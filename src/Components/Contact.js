import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
function Contact() {
  return (
    <>
    <Navbar/>
   <SectionHeader title="Contact Me" />
    <div style={{ width: "85%", margin: "auto",minHeight:"100vh",marginTop:"5rem"}}>
        <h1 style={{textAlign: "center"}} className="sectionh1">
            Touch with Me <span id="contacttele"><img style={{width:"2rem"}} src={require("../Assets/call.png")} alt="" srcset=""/></span> </h1>
            <div style={{display: "flex", flexDirection:"column",  alignItems:"center"}}>
                <p style={{textAlign: "center", fontSize: "1.1rem"}}>YOU WANNA WANT TO CONTACT ME. MY INBOX IS OPEN FOR ALL</p> 
                <p style={{fontSize:"1.5rem",color:"gray"}}>Vijay Enclave, Delhi</p>
                <a style={{fontsize:"1.5rem", textDecoration: "none", color:"gray"}} href="mailto:prateek.cse.uiet@gmail.com">prateek.cse.uiet@gmail.com</a>
               <br/>
               <div className="aboutlink">
                <a  href="https://github.com/PKBAJPAI12" target="_blank"><img
                         src={require("../Assets/github (1).png")} alt="" srcset=""/></a>
                <a  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                    target="_blank"><img src={require("../Assets/linkedin.png")} alt="" srcset=""/></a>
                <a  href="https://www.hackerrank.com/prateek_dme_dite" target="_blank"><img
                src={require("../Assets/hackerrank.png")} alt="" srcset=""/></a>
                <a  href="https://www.leetcode.com/pkbajpai123/" target="_blank"><img
                src={require("../Assets/leetcode.png")} alt="" srcset=""/></a>
                <a  href="https://twitter.com/PKbajpai123" target="_blank"><img
                src={require("../Assets/twitter.png")} alt="" srcset=""/></a>
                
            </div>
            </div>
            
</div>
<br/>
    </>
  );
}
export default Contact;
