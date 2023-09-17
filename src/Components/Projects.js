import React from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
function Projects() {
  const data=[
    {
      projectName:"Clothing Ecommerce",
      description:"E-commerce (Clothing Ecommerce) is the buying and selling of cloths, or the transmitting of funds or data, over an electronic network, primarily the internet.",
      image:"Screenshot (1107).png",
      link:"https://github.com/PKBAJPAI12/Clothing-Ecommerce"
    },
    {
      projectName:"Electricity Management",
      description:"It is a web app that in which electricity bills are handled. Admin will be able to add users and calculate bills as demand. User will Be able to see his Amount left and Dues Left and pay Bill.",
      image:"Screenshot (1110).png",
      link:"https://github.com/PKBAJPAI12/electricity_management_app"
    },
    {
      projectName:"Banking Management",
      description:"Banking Management System is Complete Solution of All Functionality and Features of Banking Services.",
      image:"Screenshot (1112).png",
      link:"https://github.com/PKBAJPAI12/Banking-Management-System"
    }
  ]
  return (
    <>
      <SectionHeader title="Projects"/>
      <div style={{ width: "85%", margin: "auto" }}>
        <h1 className="sectionh1">My Projects 💻</h1>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "row wrap",
          }}
        >
          {data.map((item)=>(
                      <div className="card">
                      <img src={require(`../Assets/${item.image}`)} alt="" />
                      <div className="cardtitle">
                        <h2>{item.projectName}</h2>
                        <p>
                          {item.description}
                        </p>
                      </div>
                      <div className="projectlink">
                        <a
                          href={item.link}
                          target="_blank"
                        >
                          <img
                            style={{ width: "2.5rem", marginTtop: "1rem" }}
                            src={require("../Assets/github (1).png")}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
          ))}
        </div>
      </div>
      <br />
    </>
  );
}
export default Projects;
