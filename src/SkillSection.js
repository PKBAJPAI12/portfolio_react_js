import React from "react";
import "./App.css";
function SkillSection() {
  let data = [
    {
      name: "HTML 5",
      image: "html-5",
    },
    {
      name: "CSS 3",
      image: "css",
    },
    {
      name: "Bootstrap5",
      image: "bootstrap",
    },
    {
      name: "JavaScript",
      image: "java-script (1)",
    },
    {
      name: "Java",
      image: "java (1)",
    },
    {
      name: "C++",
      image: "c",
    },
    {
      name: "JSP",
      image: "jsp-file",
    },
    {
      name: "PHP",
      image: "php",
    },
    {
      name: "MySQL",
      image: "database (3)",
    },
    {
      name: "Hibernate",
      image: "hibernate",
    },
    {
      name: "AWS",
      image: "html-5",
    },
    {
      name: "MS AZURE",
      image: "azure",
    },
  ];
  return (
    <>
      <div className="sectionheader">
        <hr />
        <a name="skill">
          <h1>My Skills</h1>
        </a>
        <hr />
      </div>
      <div class="skillsection">
        <div id="skillsectionimage">
          <img src={require("./Assets/Untitled design (10).png")} alt="" />
        </div>
        <div id="skillsectioncontent">
          <h1 className="sectionh1">What I Know</h1>
          <p style={{ color: "gold" }}>
            PASSIONATE CODER WHO INTERESTED TO EXPLORE EVERY TECH STACK 😎
          </p>
          <div id="skillimages">
            {data.map((skill) => {
              return (
                <div class="skillimage">
                  <img src={require(`./Assets/${skill.image}.png`)} alt="" />
                  <p>{skill.name}</p>
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
                    <span id="span1" style={{width:"85%"}}></span>
                </div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <p>Backend</p>
                    <p>70%</p>
                   
                </div>
                <div className="cover">
                    <span id="span2" style={{width:"70%"}}></span>
                </div>
            </div>
            <div>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                    <p>Programming</p>
                    <p>80%</p>
                   
                </div>                <div className="cover">
                    <span id="span3" style={{width:"80%"}}></span>
                </div>
            </div>
        </div>
    </div>
    <br></br>
    </>
  );
}
export default SkillSection;
