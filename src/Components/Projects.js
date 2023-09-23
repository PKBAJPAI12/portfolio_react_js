import React from "react";
import SectionHeader from "./SectionHeader";
import "../App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
    },
    {
      projectName:"Todo Application",
      description:"Built a ReactJS Todo app with features for adding, updating, and deleting notes, incorporating input validation and an interactive user interface",
      image:"Todo.png",
      link:"https://github.com/PKBAJPAI12/todoApplication"
    },
    {
      projectName:"User Management Authentication CRUD API",
      description:"Developed a User Registration and Authentication CRUD REST API. It has include features such as secure registration, login, updates, deletions of user details with proper validation and error handling",
      image:"project.png",
      link:"https://github.com/PKBAJPAI12/crud_api_express_js"
    },
    {
      projectName:"Spring Boot CRUD REST API",
      description:"Designed and developed a Spring Boot-based employee management CRUD API enabling efficient registration, updating, and deletion of employee details by ID",
      image:"project.png",
      link:"https://github.com/PKBAJPAI12/Spring-Boot-Employee-CRUD-Rest-Api"
    },
    {
      projectName:"AWS Resource Tracker",
      description:"Developed AWS CLI-based shell script to track and manage Lambda functions, EC2 instances, and S3 buckets for efficient resource monitoring and optimization",
      image:"project.png",
      link:"https://github.com/PKBAJPAI12/aws_resource_tracker"
    },
    {
      projectName:"Pomodoro Clock",
      description:"Built a Pomodoro Clock provides users with a user-friendly timer interface that helps them break their work into focused intervals (Pomodoros) separated by short breaks, making it easier to manage time and tasks effectively.",
      image:"Screenshot (1342).png",
      link:"https://github.com/PKBAJPAI12/pomodrome_clock"
    }
  ]
  return (
    <>
    <Navbar/>
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
                      <hr/>
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
