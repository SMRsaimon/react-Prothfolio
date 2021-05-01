import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { workData } from "../../Resourse/ProjectData";
import WorkCard from "./Card/Card";

import "./Work.css";

const Work = () => {
  const history = useHistory();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    setProjectData(workData.slice(0, 3));
  }, []);
  return (
    <div id="workCard">
      <h1>My Projects </h1>
      <div className="container">
        <div className="row">
          {projectData.map((x) => (
            <WorkCard key={x.id} data={x}></WorkCard>
          ))}
        </div>
        <div className="row pt-5">
          <div className="col-12 d-flex justify-content-center">
            <button onClick={() => history.push("/work")} className="btn btn-outline-success" type="button">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

// https://i.ibb.co/74NwN49/redOnion.png
// https://i.ibb.co/WkbK913/resturant-food.png
// https://i.ibb.co/6sGsvRq/shop.png
