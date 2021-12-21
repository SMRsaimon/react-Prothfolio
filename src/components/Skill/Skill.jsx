import React from "react";
import "./Skill.css";
import Fade from "react-reveal/Fade";
const Skill = (props) => {
  const { icon, taitle, skills } = props;
  return (
    <div className="col-10 skill-container mx-auto">
      <h3 className="d-inline">
        {" "}
        <span className="icon-color">{icon} &nbsp; </span>
        {taitle}
      </h3>
      <div className="set-skill-container">
        {skills && skills !== "work" ? (
          <>
            {skills.map((skill) => (
              <>
                <Fade top>
                  <span className="skill"> {skill}</span>
                </Fade>
              </>
            ))}
          </>
        ) : (
          <><div className="education-container p-2">
          <div className="mt-3">
            <h5>Computer Science and Engineering </h5>
            <h6>University of Information Technology and Science</h6>
            <p>
              January 2018 – <span className="current">Current</span>
            </p>
          </div>
          <div className="mt-4">
            <h5>Higher Secondary School Certificate</h5>
            <h6>Cambrian College</h6>
            <p>January 2014 – 2016</p>
          </div>
          </div>
            
          </>
        )}
       

        
      </div>

    
    </div>
  );
};

export default Skill;
