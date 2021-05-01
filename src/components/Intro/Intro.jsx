import React from "react";
import "./Intro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFileDownload, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import resume from "../../Resourse/SULTANMAHMUD.pdf";
const Intro = () => {
  const history = useHistory();
  return (
    <div id="my-background" className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="top-container">
        <div className="introContant">
          <p className="hellow">Hello, I&apos;m</p>
          <h1>Sultan Mahmud</h1>
          <ul>
            <FontAwesomeIcon icon={faCode} />
            <li> Web Developer </li>
            <FontAwesomeIcon icon={faLaptopCode} />
            <li>Programmer </li>
          </ul>
          <div className="intro-text">
            <p>
              I love programming. I am working as a Professional Web Developer in Bangladesh for almost 1+ years. I have experience in all
              expect of web development using JavaScript technology. I am familiar with MERN stack web development. My main focus is coding
              the website mobile-friendly, SEO-friendly, browser compatible, and the maximum optimized way so that it performs well.
            </p>
          </div>

          <div className="btnContainer">
            <button onClick={() => history.push("/about")} className="btn btn-outline-success" type="button">
              About Me
            </button>
            <a rel="noReferrer" href={resume} target="_blank">
              <button className="btn btn-success " type="button">
                <FontAwesomeIcon icon={faFileDownload} /> Resume
              </button>
            </a>
          </div>
        </div>
        <div className="intro-img">
          <img src="https://i.ibb.co/0BJfy8T/a.png" alt="background Img " srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

// https://i.ibb.co/cDG1QC1/1.png
// https://i.ibb.co/0BJfy8T/a.png

// cv link   https://drive.google.com/file/d/1mjR96Md2Znz_bBOTNPT0Pa0ERv4bJG-j/view
