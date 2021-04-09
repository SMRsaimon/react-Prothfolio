import React from "react";
import WorkCard from "./Card/Card";

import "./Work.css";

const Work = () => {
  const workData = [
    {
      id: "01",
      img: "https://i.ibb.co/74NwN49/redOnion.png",
      title: "Red Onion",
      description:
        "A single page  restaurant app where people are able to select food in their cart and checkout the cart with their information",
      technology: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication"],
      gitLink: "",
      liveLink: "https://red-onion-restaura.firebaseapp.com/",
    },
    {
      id: "02",
      img: "https://i.ibb.co/6sGsvRq/shop.png",
      title: "Digital Shop",
      description:
        "A single-page web app with an admin panel where people add some product, remove the product, Place an Order,  Check Order history. And simple google log in and log out system",

      technology: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Metarial UI"],
      gitLink: "",
      liveLink: "https://digital-shop-3e726.web.app/Home",
    },
    {
      id: "03",
      img: "https://i.ibb.co/WkbK913/resturant-food.png",
      title: "Tasty food",
      description: "Simple application, Make Intarective design, Day and Dark mood ",
      technology: ["HTML5", "CSS3", "JavaScript"],
      gitLink: "",
      liveLink: "https://smrsaimon.github.io/Resturant-project/resturant.html",
    },
  ];

  return (
    <div id="workCard">
      <h1>My Works </h1>
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

// https://i.ibb.co/74NwN49/redOnion.png
// https://i.ibb.co/WkbK913/resturant-food.png
// https://i.ibb.co/6sGsvRq/shop.png
