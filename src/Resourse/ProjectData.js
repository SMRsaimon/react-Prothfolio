import artist from "../img/artist.png";
import blog from "../img/blog.png";
import designer from "../img/designer.png";
import factorx from "../img/factorX.png";
import ITservices from "../img/IT-Project.png";
import jobSearch from "../img/jobSearch.png";
import reduxProject from "../Resourse/redux.png";

export const workData = [
  {
    id: "010",
    img: factorx,
    title: "FactorX Invoice ",
    description: `FactorX Invoice is a real life premium type application that I developed for my company client.
      It has two versions BASIC and PREMIUM. BASIC is free for all users and PREMIUM is a paid
      version. Users can create invoices, save it as draft, and can send to specific users. Also users
      can send any file (video, pdf, etc.).And has a lot of features.[email:sudeep@kalpas.in, pass:
      A123456]`,
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Payment",
    ],
    gitLink: "https://github.com/SMRsaimon",
    liveLink: "https://invoice-project-7ec89.web.app/",
  },
  {
    id: "0101",
    img: jobSearch,
    title: "Designers-learn",
    description: `Job post and job search is a real life premium type application that I developed for my
    company client. It has six types of user roles. Companies can post the job and regular users can
    apply for this job and it has a lot of features for different different types of users.`,
    technology: ["React.js", "Laravel,", "MySql"],
    gitLink: "https://github.com/SMRsaimon",
    liveLink: "https://rettung4you.ga/",
  },
  {
    id: "0102",
    img: designer,
    title: "Job Post And Job Search",
    description: `It's a designers management website where learner, mentors can both learn and teach. It's a
    complete designers management system that contains both meetup, batch, and mentor
    management systems. It's an incomplete project.`,
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe Payment",
    ],
    gitLink: "https://github.com/SMRsaimon",
    liveLink: "https://designerrs-learner.web.app/",
  },
  {
    id: "01",
    img: artist,
    title: "Artist Portfolio",
    description:
      "This is an official real-life project. It's completely dynamic. Admin can create a new project and upload his project , also update, delete option available. Dynamic profile information and blog section also.",
    technology: ["React.js", "Node.js", "Express.js", "MySql"],
    gitLink: "https://github.com/SMRsaimon",
    liveLink: "https://www.arahman-art.com/",
  },
  {
    id: "04",
    img: "https://i.ibb.co/74NwN49/redOnion.png",
    title: "Red Onion",
    description:
      "A single page  restaurant application where people are able to select food in their cart and checkout the cart with their information",
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
    ],
    gitLink: "https://github.com/SMRsaimon",
    liveLink: "https://red-onion-restaura.firebaseapp.com/",
  },
  {
    id: "02",
    img: ITservices,
    title: "IT Services & Tech",
    description:
      "A single page  IT Consultancy  application  where people are able to select a services and checkout  with their  personal and payment information ",
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Stripe.js",
    ],
    gitLink: "https://github.com/SMRsaimon/Globex-IT-Services-Tech-Clint-site",
    liveLink: "https://smr-creative-it.web.app/",
  },
  {
    id: "05",
    img: "https://i.ibb.co/6sGsvRq/shop.png",
    title: "Digital Shop",
    description:
      "A single-page web application with an admin panel where people add some product, remove the product, Place an Order,  Check Order history. And simple google log in and log out system",

    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Metarial UI",
    ],
    gitLink:
      "https://github.com/Porgramming-Hero-web-course/full-stack-client-SMRsaimon",
    liveLink: "https://digital-shop-3e726.web.app/Home",
  },
  {
    id: "03",
    img: "https://i.ibb.co/6BWHjKR/Screenshot-9.png",
    title: "Medical Services web application",
    description:
      " A single-page Medical services application where people are able to book an appointment with a specific doctor and a specific date. Doctor cancel the appointment and check all appointments.",
    technology: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
    ],
    gitLink:
      "https://github.com/SMRsaimon/MERN-strack-MedicalProject-ClintSite",
    liveLink: "https://saimon-health-cear.web.app/",
  },

  {
    id: "06",
    img: reduxProject,
    title: "React-Redux-Ecommerce",
    description:
      "This is a single page e-commerce application. It's a team Projects. Where I used React-redux for state management. Implement add to cart option also Increment and Decrement ",
    technology: ["React.js", "Redux.js", "Bootstrap5", "Firebase"],
    gitLink: "https://github.com/SMRsaimon/React-Redux-Ecommerce-project2",
    liveLink: "https://sundorban-276cb.web.app/",
  },
  {
    id: "07",
    img: "https://i.ibb.co/WkbK913/resturant-food.png",
    title: "Tasty food",
    description:
      "Simple application, Make Intarective design, Day and Dark mood ",
    technology: ["HTML5", "CSS3", "JavaScript"],
    gitLink: "https://github.com/SMRsaimon/Resturant-project",
    liveLink: "https://smrsaimon.github.io/Resturant-project/resturant.html",
  },
  {
    id: "08",
    img: blog,
    title: "Blog Application",
    description:
      "This is a blog application. Users can create new blogs. Update the blogs and also delete his own blog ",
    technology: ["React", "JavaScript", "Bootstrap"],
    gitLink: "https://github.com/SMRsaimon/Technext-Limited-assignment",
    liveLink: "https://blog-site-1901c.web.app/profile",
  },
];
