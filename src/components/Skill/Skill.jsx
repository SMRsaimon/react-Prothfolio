import React from "react";
import "./Skill.css";

const Skill = (props) => {
  const { taitle, skills } = props;
  return (
    <div className="col-10 skill-container mx-auto">
      <h3> {taitle}</h3>
      <div className="set-skill-container">
        {skills.map((skill) => (
          <>
            <span className="skill"> {skill}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skill;
