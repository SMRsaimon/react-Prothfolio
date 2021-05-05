import React from "react";

const BlogCard = ({ blog }) => {
  const { banner, title, description, link } = blog;
  return (
    <div className="col-md-4 mb-3">
      <div className="card blog-card-container">
        <div className="blog-img-container">
          <img src={banner} alt="" srcset="" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description} <a href={link}  rel="noreferrer" target="_blank" className="btn btn-outline-primary"> Read more  </a></p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
