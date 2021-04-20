import React from "react";
import WorkCard from "./Card/Card";
import ITservices from "../../img/IT-Project.png";

import "./Work.css";

const Work = () => {
  const workData = [
    {
      id: "01",
      img: ITservices,
      title: "IT Services & Tech",
      description:
        "A single page  IT Consultancy  application  where people are able to select a services and checkout  with their  personal and payment information ",
      technology: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication", "Stripe.js"],
      gitLink: "https://github.com/SMRsaimon",
      liveLink: "https://smr-creative-it.web.app/",
    },
    {
      id: "02",
      img: "https://i.ibb.co/74NwN49/redOnion.png",
      title: "Red Onion",
      description:
        "A single page  restaurant application where people are able to select food in their cart and checkout the cart with their information",
      technology: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase Authentication"],
      gitLink: "https://github.com/SMRsaimon",
      liveLink: "https://red-onion-restaura.firebaseapp.com/",
    },
    {
      id: "03",
      img: "https://i.ibb.co/6sGsvRq/shop.png",
      title: "Digital Shop",
      description:
        "A single-page web application with an admin panel where people add some product, remove the product, Place an Order,  Check Order history. And simple google log in and log out system",

      technology: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Metarial UI"],
      gitLink: "https://github.com/Porgramming-Hero-web-course/full-stack-client-SMRsaimon",
      liveLink: "https://digital-shop-3e726.web.app/Home",
    },
    {
      id: "04",
      img: "https://i.ibb.co/WkbK913/resturant-food.png",
      title: "Tasty food",
      description: "Simple application, Make Intarective design, Day and Dark mood ",
      technology: ["HTML5", "CSS3", "JavaScript"],
      gitLink: "https://github.com/SMRsaimon/Resturant-project",
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
