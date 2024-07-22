import React from "react";
import {useParams} from "react-router-dom";

const Blogdetails = ({ blogs }) => {
  const { blogId } = useParams();
  const blog = blogs.filter((blog) => blog.id === parseInt(blogId))[0];
  return (
    <div className="container row h-100">
      <div className="col-5">
        <img src={blog.imageURL} alt="Blog image" className="img-fluid h-75 w-100" />
      </div>
      <div className="col-6 text-start">
        <h2>{blog.title}</h2>
        <p className="text-muted">by {blog.author}</p>
        <p>{blog.content}</p>
        <a href={blog.siteURL} target="_blank">
          <div className="btn btn-outline-success">
            Read More <i className="fas fa-arrow-right ms-2"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blogdetails;