import React from "react";
import WorkCard from "./Card/Card";

import "./Work.css";

const Work = () => {
  const workData = [
    {
      id: "01",
      img: "https://i.ibb.co/3SG9wj6/gym-responsive-webapp.png",
      title: "SMR E-Commerce",
      description:
        "A single page E-Commerce app where people are able to select Product in their cart and checkout the cart with their information .",
      technology: ["React.js", "Firebase", "React Router", "Metarial UI"],
      gitLink: "",
      liveLink: "",
    },
    {
      id: "02",
      img: "https://i.ibb.co/3SG9wj6/gym-responsive-webapp.png",
      title: "Digital Riders",
      description:
        "A single page E-Commerce app where people are able to select Product in their cart and checkout the cart with their information .",
      technology: ["React.js", "Firebase", "React Router", "Metarial UI"],
      gitLink: "",
      liveLink: "",
    },
    {
      id: "03",
      img: "https://i.ibb.co/3SG9wj6/gym-responsive-webapp.png",
      title: "SMR E-Commerce",
      description:
        "A single page E-Commerce app where people are able to select Product in their cart and checkout the cart with their information .",
      technology: ["React.js", "Firebase", "React Router", "Metarial UI"],
      gitLink: "",
      liveLink: "",
    },
  ];

  return (
    <div id="workCard">
      <div className="container">
        <div className="row">
          {workData.map((x) => (
            <WorkCard key={x.id} data={x}></WorkCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
