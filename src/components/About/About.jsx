import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Skill from "../Skill/Skill";
import "./About.css";
import resume from "../../Resourse/SULTANMAHMUD.pdf";
import { FaGraduationCap } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFileCode } from "react-icons/vsc";
const About = () => {
  const setSkills = [
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "React.Js",
    "Redux.Js",
    "Node.Js",
    "Express.Js",
    "Mongo DB",
    "React-Bootstrap",
    "Metarial UI",
    "C/C++",
    "Firebase",
    "Heroku",
    "Netlify",
    "Git",
    "VS Code",
  ];
  const workWith = ["JavaScript", "React.Js", "Redux.Js", "Node.Js", "Express.Js", "Mongo DB"];
  const taitle1 = "My Skills Set";
  const taitle2 = "I want to work with";
  const taitle3 = "Education";
  const icon1 = <GiSkills className="metarialui" />;
  const icon2 = <VscFileCode className="metarialui" />;
  const icon3 = <FaGraduationCap className="metarialui" />;

  return (
    <div id="about-conatiner">
      <div className="container about-contant-conatiner">
        <div className="row">
          <div className="col-md-6 py-5 about-img-wrapper-left">
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

              <a rel="noReferrer" href={resume} target="_blank">
                <button className="btn btn-outline-success " type="button">
                  <FontAwesomeIcon icon={faFileDownload} /> Resume
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <Skill icon={icon1} taitle={taitle1} skills={setSkills}></Skill>
              <Skill icon={icon2} taitle={taitle2} skills={workWith}></Skill>
              <Skill icon={icon3} taitle={taitle3} skills={false}></Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
