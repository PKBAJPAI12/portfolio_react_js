import React from "react";
import "./App.css";
function Certification() {
  return (
    <>
     <div className="sectionheader">
        <hr/>
       <a name="certification"><h1>Certification</h1></a> 
        <hr/>

    </div>
    <div style={{ width: "85%", margin: "auto" }}>
        <h1 className="sectionh1">Acheivements and
            Certification 🏆</h1>
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "row wrap",
          }}>
            <div className="card">
                <img style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/web-development.webp")} alt=""/>
                <div style={{height:"16rem" }}className="cardtitle">
                    <h2>Web Development</h2>
                    <p>
                        Learned about Web Development of
                        HTML, CSS, Bootstrap, DBMS, PHP, JS,
                        React from Internshala
                    </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3Olp6Wi" target="_blank">
                        <button>Certificate</button></a>
                </div>

            </div>
            <div  className="card">
                <img style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/Accenture.png")} alt=""/>
                <div style={{height:"16rem" }} className="cardtitle">
                    <h2>Accenture Developer Program</h2>
                    <p>
                        Learned about Technical Requirements,
                        Reading and Understanding of Code, SDLC and
                        Debugging Algorithm and more about Unit Testing, UAT.

                    </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3cuynhx" target="_blank">
                        <button>Certificate</button></a>
                </div>

            </div>
            <div className="card">
                <img  style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/java.webp")} alt=""/>
                <div style={{height:"16rem" }} className="cardtitle">
                    <h2>Core Java</h2>
                    <p>
                        Learned about Basic Concept of Java 
                        and OOPS and Development of Project from Internshala
                    </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3yX5fXG"
                        target="_blank">
                        <button>Certificate</button></a>
                </div>
            </div>

            <div className="card">
                <img  style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/HackerRank5star.png")} alt=""/>
                <div style={{height:"16rem" }} className="cardtitle">
                    <h2>5🌟 Hackerrank (Problem Solving)</h2>
                    <p>
                        Acheive 5 🌟 on HackerRank in Problem Solving by implementation of widely used Data Structure
                     </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3PD0JVH"
                        target="_blank">
                        <button>Acheivements</button></a>
                </div>
            </div>

            <div className="card">
                <img  style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/data-structures-algorithms.webp")} alt=""/>
                <div style={{height:"16rem" }} className="cardtitle">
                    <h2>Data Structure in C++</h2>
                    <p>
                        Learned and implements widely used Data Structure of Array, String, LinkedList, Stack and Queue,Tree from Udemy
                    </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3yX5fXG"
                        target="_blank">
                        <button>Certificate</button></a>
                </div>
            </div>

            <div className="card">
                <img  style={{width:"100%", height: "45%", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}}
                    src={require("./Assets/hackerrank.png")} alt=""/>
                <div style={{height:"16rem" }} className="cardtitle">
                    <h2>HackerRank Problem Solving</h2>
                    <p>
                        Earned the Problem Solving certification by successfully clearing HackerRank Problem Solving exam. 
                    </p>

                </div>
                <div className="projectlink">
                    <a href="https://bit.ly/3B4Mx33"
                        target="_blank">
                        <button>Certificate</button></a>
                </div>
            </div>


        </div>
    </div>
    </>
  );
}
export default Certification;
