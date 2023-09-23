import React,{useContext} from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
import { AppContext } from "../AppContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
function SkillSection() {
  const {page}=useContext(AppContext);
  let data = [
    {
      name: "HTML 5",
      image: "html-5",
      imagel:"html"
    },
    {
      name: "CSS 3",
      image: "css",
      imagel:"css-3"
    },
    {
      name: "Bootstrap5",
      image: "bootstrap",
      imagel:"bootstrap (1)"
    },
    {
      name: "JavaScript",
      image: "java-script (1)",
      imagel:"java-script"
    },
    {
      name: "React Js",
      image: "react (2)",
      imagel:"react (3)"
    },
    {
      name: "Node Js",
      image: "node-js",
      imagel:"nodejs (2)" 
    },
    {
      name: "Express Js",
      image: "express (3)",
      imagel:"express" 
    },
    {
      name: "MongoDB",
      image: "mongodb",
      imagel:"mongodb (1)" 
    },
    {
      name: "Java",
      image: "java (1)",
      imagel:"java"
    },
    {
      name: "C++",
      image: "c",
      imagel:"c-logo"
    },
    {
      name: "JSP",
      image:"jsp-file",
      imagel: "jsp-file (1)",
    },
    {
      name: "PHP",
      image:"php",
      imagel: "php (1)",
    },
    {
      name: "MySQL",
      image:"database (3)",
      imagel: "sql-server",
    },
    {
      name: "Hibernate",
      image: "hibernate",
      imagel:"hibernate (2)"
    },
    {
      name: "AWS",
      image: "aws",
      imagel:"aws (1)"
    },
    {
      name: "MS AZURE",
      image: "azure",
      imagel:"azure (1)"
    }
  ];
  return (
    <>
      <Navbar/>
      <SectionHeader title="My Skills"/>
      <div class="skillsection">
        <div id="skillsectionimage">
          <img src={page?require("../Assets/Skill.png"):require("../Assets/Untitled design (10).png")} alt="" />
        </div>
        <div id="skillsectioncontent">
          <h1 className="sectionh1">What I Know</h1>
          <p style={{color:page?"#868e96":"gold"}}>
            PASSIONATE CODER WHO INTERESTED TO EXPLORE EVERY TECH STACK 😎
          </p>
          <div id="skillimages">
            {data.map((skill) => {
              return (
                <div class="skillimage">
                  <img src={page?require(`../Assets/${skill.imagel}.png`):require(`../Assets/${skill.image}.png`)} alt="" />
                  <p style={{color:page?"gray":"white"}}>{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="skillprofieciency">
        <h1 className="sectionh1">Skill Proficiency 👷‍♂️
        </h1>
        <div>
            <div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <p>Frontend/Design</p>
                    <p>85%</p>
                   
                </div>
                <div className="cover">
                    <span id={page?"span1l":"span1"} style={{width:"85%"}}></span>
                </div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <p>Backend</p>
                    <p>70%</p>
                   
                </div>
                <div className="cover">
                    <span id={page?"span2l":"span2"} style={{width:"70%"}}></span>
                </div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <p>Programming</p>
                    <p>80%</p>
                   
                </div>                <div className="cover">
                    <span id={page?"span3l":"span3"} style={{width:"80%"}}></span>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    </>
  );
}
export default SkillSection;
