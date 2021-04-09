import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Skill from "../Skill/Skill";
import "./About.css";

const About = () => {
  const setSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.Js",
    "Redux.Js",
    "Node.Js",
    "Express.Js",
    "Mongo DB",
    "C/C++",
    "Firebase",
    "Git",
    "VS Code",
  ];
  const workWith = ["JavaScript", "React.Js", "Redux.Js", "Node.Js", "Express.Js", "Mongo DB"];
  const taitle1 = "My Skills Set";
  const taitle2 = "I want to work with";

  return (
    <div id="about-conatiner">
      <div className="container about-contant-conatiner">
        <div className="row">
          <div className="col-md-6 py-5">
            <div className="about-img-container d-flex justify-content-center">
              <img src="https://i.ibb.co/cDG1QC1/1.png" alt="" srcset="" />
            </div>
            <div className="about-contant">
              <h1>
                <span>I'M</span> &nbsp; Sultan Mahmud
              </h1>
              <p>
                A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with
                modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with
                increasing responsibilities.
              </p>

              <a
                rel="noReferrer"
                href="https://docs.google.com/document/d/1mCvun3zoBAo-rB8aZVVPUE4ajHx7Vzg2M7nnA5FjonU/edit"
                target="_blank"
              >
                <button className="btn btn-outline-success " type="button">
                  <FontAwesomeIcon icon={faFileDownload} /> Resume
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <Skill taitle={taitle1} skills={setSkills}></Skill>
              <Skill taitle={taitle2} skills={workWith}></Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
