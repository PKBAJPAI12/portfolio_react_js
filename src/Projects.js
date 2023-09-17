import React from "react";
import "./App.css";
function Projects() {
  return (
    <>
      <div className="sectionheader">
        <hr />
        <a name="project">
          <h1>Projects</h1>
        </a>
        <hr />
      </div>
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
          <div className="card">
            "
            <img src={require("./Assets/Screenshot (1107).png")} alt="" />
            <div className="cardtitle">
              <h2>Clothing Ecommerce</h2>
              <p>
                E-commerce (Clothing Ecommerce) is the buying and selling of
                cloths, or the transmitting of funds or data, over an electronic
                network, primarily the internet.
              </p>
            </div>
            <div className="projectlink">
              <a
                href="https://github.com/PKBAJPAI12/Clothing-Ecommerce"
                target="_blank"
              >
                <img
                  style={{ width: "2.5rem", marginTtop: "1rem" }}
                  src={require("./Assets/github (1).png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={require("./Assets/Screenshot (1110).png")} alt="" />
            <div className="cardtitle">
              <h2>Electricity Management</h2>
              <p>
                It is a web app that in which electricity bills are handled.
                Admin will be able to add users and calculate bills as demand.
                User will Be able to see his Amount left and Dues Left and pay
                Bill.
              </p>
            </div>
            <div className="projectlink">
              <a
                href="https://github.com/PKBAJPAI12/electricity_management_app"
                target="_blank"
              >
                <img
                  style={{ width: "2.5rem", marginTtop: "1rem" }}
                  src={require("./Assets/github (1).png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={require("./Assets/Screenshot (1114).png")} alt="" />
            <div className="cardtitle">
              <h2>Banking Management</h2>
              <p>
                Banking Management System is Complete Solution of All
                Functionality and Features of Banking Services.
              </p>
            </div>
            <div className="projectlink">
              <a
                href="https://github.com/PKBAJPAI12/Banking-Management-System"
                target="_blank"
              >
                <img
                  style={{ width: "2.5rem", marginTtop: "1rem" }}
                  src={require("./Assets/github (1).png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
export default Projects;
