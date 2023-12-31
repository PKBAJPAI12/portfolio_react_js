import React,{useContext} from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
import { AppContext } from "../AppContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Experience() {
    const {page}=useContext(AppContext);
    const data=[
        {
            companyName:"Tata Consultancy Services",
            companyLogo:"tcs1.png",
            postTitle:"Developer",
            duration:"Nov 2022- Present",
            jobDescription:["Design and Developed reusable and scalable UI components, ensuring meticulous debugging throughout the process resulting in improved code maintainability and reduced development time by integrating REST APIs and JSON responses using cutting-edge technologies like AWS,Vue.js, Nuxt.js, and Node.js.",
            "Successfully collaborated with cross-functional teams, utilizing Agile methodologies and used tools and software like Jira, ServiceNow, Contentful,Git and GitHub, Heroku"]
        },
        {
        companyName:"Future Ready Talent",
        companyLogo:"frt.png",
        postTitle:"Virtual Internship in Microsoft Azure",
        duration:"Nov 2021- Feb 2022",
        jobDescription:["Learn Microsoft Azure Fundamental",
        "Attend Industry Sessions of Use of MS Azure",
    "Build Problem Solving Project using Database",
"Use MS Azure Cloud Services for Deploy Web Application"]
    },
    {
        companyName:"SmartKnower",
        companyLogo:"sk.png",
        postTitle:"Campus Ambassador",
        duration:"Nov 2020- May 2021",
        jobDescription:["Build Network and Relationship with College Friends and Interact with them.",
        "Learn Social Media Marketing, Blogging and SEO During this Period"]
    },
    {
        companyName:"Internshala",
        companyLogo:"internshala.svg",
        postTitle:"Internshala Student Partner",
        duration:"Sep 2020- Nov 2020",
        jobDescription:["Create Awareness about Company Product in Campus and Social Media Platform",
        "Time Management"]
    }
    ]
  return (
    <>
    <Navbar/>
    <SectionHeader title="Work Experience"/>
    <div style={{ width: "85%", margin: "auto" }}>
        <h1 className="sectionh1">My Experiences 👨‍💻
        </h1>
        <br/>
        {data.map((exp)=>{
            return (
                <>
                <div className="experience">

                <div style={{backgroundColor:page?"rgb(140, 197, 194)":"rgb(76, 149, 197)"}} id="experiencetitle">
    
                    <h1>{exp.companyName}</h1>
                    <img style={{width:"9rem"}} src={require(`../Assets/${exp.companyLogo}`)} alt="" srcset=""/>
                </div>
                <div className="triangle">
    
                </div>
                <div id="experiencesection">
                    <h1>{exp.postTitle}</h1>
                    <h2>{exp.duration}</h2>
                    <p>What I'm Learn</p>
                    <ul>
                        {exp.jobDescription.map((desc)=>
                          (<li key={desc}>{desc}</li>)
                        )}
                    </ul>
    
                </div>
            </div>
            <br/>
            </>
            )
        })}

    </div>
    <br/>
    </>
  );
}
export default Experience;
