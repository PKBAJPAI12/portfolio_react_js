import React from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Certification() {
    const data=[
        {
            name:"On The Spot Award",
            image:"onspot.PNG",
            details:"Received an On-the-Spot Award in recognition of exceptional individual performance, celebrating my outstanding contributions to the organization.",
            link:"https://drive.google.com/file/d/16HzCfjkrqKYcHtRSJKI7XItBZBVmH-L3/view?usp=sharing"
        },
        {
            name:"Elevate Wings Award",
            image:"wings1.PNG",
            details:"Received the prestigious Wings1 Award Certificate and Gems in acknowledgment of a remarkable proficiency in Oracle PL/SQL, demonstrating excellence in assessment and expertise",
            link:"https://drive.google.com/file/d/1lODDmGVULXTzGaV52RAjz2igEl4qPdsh/view?usp=sharing"
        },
        {
            name:"Web Development",
            image:"web-development.webp",
            details:"Learned about Web Development of HTML, CSS, Bootstrap, DBMS, PHP, JS, React from Internshala",
            link:"https://bit.ly/3Olp6Wi"
        },
        {
            name:"Core Java",
            image:"java.webp",
            details:"Learned about Basic Concept of Java and OOPS and Development of Project from Internshala",
            link:"https://bit.ly/3yX5fXG"
        },
        {
            name:"5🌟 Hackerrank (Problem Solving)",
            image:"HackerRank5star.png",
            details:"Acheive 5 🌟 on HackerRank in Problem Solving by implementation of widely used Data Structure",
            link:"https://bit.ly/3PD0JVH"
        },
        {
            name:"Data Structure in C++",
            image:"data-structures-algorithms.webp",
            details:"Learned and implements widely used Data Structure of Array, String, LinkedList, Stack and Queue,Tree from Udemy",
            link:"https://bit.ly/3yX5fXG"
        },
        {
            name:"HackerRank Problem Solving",
            image:"hackerrank.png",
            details:"Earned the Problem Solving certification by successfully clearing HackerRank Problem Solving exam.",
            link:"https://bit.ly/3B4Mx33"
        }
    ]
  return (
    <>
    <Navbar/>
    <SectionHeader title="Certification"/>
    <div style={{ width: "85%", margin: "auto" }}>
        <h1 className="sectionh1">Acheivements and
            Certification 🏆</h1>
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "row wrap",
          }}>
          {data.map((item)=>(
            <div className="card">
            <img  style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                src={require(`../Assets/${item.image}`)} alt=""/>
            <div style={{height:"16rem" }} className="cardtitle">
                <h2>{item.name}</h2>
                <p>
                    {item.details} 
                </p>

            </div>
            <div className="projectlink">
                <a href={item.link}
                    target="_blank">
                    <button>Certificate</button></a>
            </div>
        </div>
          ))}
        </div>
    </div>
    </>
  );
}
export default Certification;
