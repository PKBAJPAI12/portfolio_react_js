import React from "react";
import "./App.css";
function Experience() {
  return (
    <>
     <div className="sectionheader">
        <hr/>
     <a name="experience"><h1>Work Experience</h1></a>   
        <hr/>


    </div>
    <div style={{ width: "85%", margin: "auto" }}>
        <h1 className="sectionh1">My Experiences 👨‍💻
        </h1>
        <br/>
        <div className="experience">

            <div id="experiencetitle">

                <h1>Future Ready Talent</h1>
                <img style={{width:"9rem"}} src={require("./Assets/frt.png")} alt="" srcset=""/>
            </div>
            <div className="triangle">

            </div>
            <div id="experiencesection">
                <h1>Virtual Internship in Microsoft Azure</h1>
                <h2>Nov 2021- Feb 2022</h2>
                <p> Project: Deploy Web Application using Azure Cloud Services</p>
                <p>What I'm Learn</p>
                <ul>
                    <li>Learn Microsoft Azure Fundamental</li>
                    <li>Attend Industry Sessions of Use of MS Azure</li>
                    <li>Build Problem Solving Project using Database</li>
                    <li>Use MS Azure Cloud Services for Deploy Web
                        Application</li>
                </ul>

            </div>
        </div>
        <br/>
        <div className="experience">

            <div id="experiencetitle">

                <h1>SmartKnower</h1>
                <img style={{width:"9rem"}} src={require("./Assets/sk.png")} alt="" srcset=""/>
            </div>
            <div className="triangle">

            </div>
            <div id="experiencesection">
                <h1>Campus Ambassador</h1>
                <h2>Nov 2020- May 2021</h2>
                <p>What I'm Learn</p>
                <ul>
                    <li>Build Network and Relationship with College Friends and Interact with them.</li>
                    <li>Learn Social Media Marketing, Blogging and SEO During this Period</li>
                   <br/>
                </ul>

            </div>
        </div>
        <br/>
        <div className="experience">

            <div id="experiencetitle">

                <h1>Internshala</h1>
                <img  src={require("./Assets/internshala.svg")} alt="" srcset=""/>
            </div>
            <div className="triangle">

            </div>
            <div id="experiencesection">
                <h1>Internshala Student Partner</h1>
                <h2>Sep 2020- Nov 2020</h2>
                <p>What I'm Learn</p>
                <ul>
                    <li>Create Awareness about Company Product in Campus and Social Media Platform</li>
                    <li>Time Management</li>
                </ul>
               <br/>
            </div>
        </div>

    </div>
    <br/>
    </>
  );
}
export default Experience;
