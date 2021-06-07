import React from "react";
import "./Blog.css";
import Rotate from "react-reveal/Rotate";
import blog1 from "../../img/javascripBlog1.png";
import bannerEs6 from "../../img/banner-es6.png";
import reactBanner from "../../img/reactBanner.jpg";
import JSinterviewQuestion from "../../img/JSinterviewQuestion.jpg"
import BlogCard from "./BlogCard";
const Blog = () => {

  const Blog=[{
           id:1,
          banner: blog1,
          title:"JavaScript Basic concept (String & Array)",
          description:"JavaScript (JS) is a lightweight, interpreted, just-in-time compiled programming language with object-oriented capabilities that allows to build interactivity into otherwise static HTML pages.............",
          link:"https://smrsaimon960.medium.com/"

  },
  {
    id:2,
   banner: bannerEs6,
   title:"ECMAScript 2015 and Hoisting Overview",
   description:"Before ES6 a programmer only uses var for declaration variable in javaScript. now we can use let and const also. why came let and const ??",
   link:"https://smrsaimon960.medium.com/ecmascript-2015-and-hoisting-overview-9fcd15c01c1d"

},
{
  id:3,
 banner: reactBanner,
 title:"React Basic concept ",
 description:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes",
 link:"https://smrsaimon960.medium.com/react-basic-concept-fb64b30f79b4"

},
{
  id:4,
 banner: JSinterviewQuestion,
 title:"To 10 JavaScript interview Question and solution  ",
 description:"If a method or function contains “this”, then “this” will represent the object from which the method or function will be called.",
 link:"https://smrsaimon960.medium.com/to-10-javascript-interview-question-and-solution-cd43e598e75c"

}

]

  return (
    <div id="blog">
        <Rotate bottom left>
        <h1 className="d-block pb-5 mb-5">My blogs </h1>
      </Rotate>
  
      <div className="container">
     
        <div className="row">
        {
         Blog.map(data=>  <BlogCard key={data.id} blog={data}></BlogCard>)
      }
        </div>
      </div>
  
    </div>
  );
};

export default Blog;
