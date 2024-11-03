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
            postTitle:"Full Stack Developer",
            duration:"Nov 2022- Present",
            jobDescription:["Implement business logic for user authentication with utilized Rest API for HCP login",
            "Translated Figma wireframes into reusable components, designing mobile-friendly and responsive UI",
        "Implement Contentful CMS and Redis caching integration to improve website performance",
    "Built Rest API on AWS API Gateway using AWS Lambda, including rate limiting, enhancing performance and reliability, using these Rest APIs on frontend and developing business logic",
"Worked on AWS Domain, React Migration, and SEO Development which increased website traffic by 25% with cross-functional teams, following Agile methodologies and tools like Jira, ServiceNow",
"Develop CI/CD pipeline using GitHub Actions and AWS, reducing deployment time and ensuring 99.99% uptime",
"Created an automation testing tool for end-to-end browser testing using Playwright, TypeScript, Cucumber, and Node.js, integrating it with GitHub Actions CI for automated script execution.",
"Developed a tool using Puppeteer, PdfLib, and Node Js to automate capture screenshots with event handling across device viewports from website sitemaps, generating PDF reports, and eliminating manual effort",
"Participated in code reviews to ensure quality and best practices, and Led React.js training and KT sessions for new joiners."]
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
