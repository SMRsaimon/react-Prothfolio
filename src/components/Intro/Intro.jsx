import React from "react";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFileDownload, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
// import resume from "../../Resourse/SULTANMAHMUD.pdf";
import ReactTypingEffect from "react-typing-effect";
import Fade from "react-reveal/Fade";

const Intro = () => {
  const history = useHistory();


  return (
    <div id="my-background" className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="top-container">
        <Fade left>
          <div className="introContant">
            <p className="hellow">Hello, I&apos;m</p>
            <h1 className="typewriter">Sultan Mahmud</h1>
            <ul>
              <FontAwesomeIcon icon={faCode} />

              <li>
                <ReactTypingEffect text={["Web Developer", "MERN Stack Developer", "React Developer"]} />
              </li>

              <FontAwesomeIcon icon={faLaptopCode} />
              <li>Programmer </li>
            </ul>
            <div className="intro-text">
              <p>
                I love programming. I am working as a Professional Web Developer in Bangladesh for almost 1+ years. I have experience in all
                expect of web development using JavaScript technology. I am familiar with MERN stack web development. My main focus is
                coding the website mobile-friendly, SEO-friendly, browser compatible, and the maximum optimized way so that it performs
                well.
              </p>
            </div>

            <div className="btnContainer">
              <button onClick={() => history.push("/about")} className="btn btn-outline-success" type="button">
                About Me
              </button>
              <a rel="noReferrer" href="https://drive.google.com/file/d/1jubZ-UAl-1pQ2maK9odWDZ2ZEhPKcV-l/view" target="_blank">
                <button className="btn btn-success " type="button">
                  <FontAwesomeIcon icon={faFileDownload} /> Resume
                </button>
              </a>
            </div>
          </div>
        </Fade>

        <div className="intro-img">
          <Fade right>
            <img src="https://i.ibb.co/0BJfy8T/a.png" alt="background Img " srcset="" />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Intro;

// https://i.ibb.co/cDG1QC1/1.png
// https://i.ibb.co/0BJfy8T/a.png

// cv link   https://drive.google.com/file/d/1mjR96Md2Znz_bBOTNPT0Pa0ERv4bJG-j/view
