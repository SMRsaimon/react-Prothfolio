import React from "react";
import "./Blog.css";
import Rotate from "react-reveal/Rotate";
import blog1 from "../../img/javascripBlog1.png"
import BlogCard from "./BlogCard";
const Blog = () => {

  const Blog=[{
           id:1,
          banner: blog1,
          title:"JavaScript Basic concept (String & Array)",
          description:"JavaScript (JS) is a lightweight, interpreted, just-in-time compiled programming language with object-oriented capabilities that allows to build interactivity into otherwise static HTML pages.",
          link:"https://smrsaimon960.medium.com/"

  },
  {
    id:2,
   banner: blog1,
   title:"JavaScript  next  comming soon....",
   description:"JavaScript (JS) is a lightweight, interpreted, just-in-time compiled programming language with object-oriented capabilities that allows to build interactivity into otherwise static HTML pages.",
   link:"https://smrsaimon960.medium.com/"

},
{
  id:3,
 banner: blog1,
 title:"JavaScript  next  comming soon......",
 description:"JavaScript (JS) is a lightweight, interpreted, just-in-time compiled programming language with object-oriented capabilities that allows to build interactivity into otherwise static HTML pages.",
 link:"https://smrsaimon960.medium.com/"

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
