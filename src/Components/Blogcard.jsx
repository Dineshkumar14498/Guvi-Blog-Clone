import React from "react";
import { Link } from "react-router-dom";


const Blogcard = ({ blog }) => {
  return (
    <>
      <div className="col">
        <Link to={`/blogs/${blog.id}`}>
          <div className="card h-100">
            <div className="card-img">
              <img
                src={blog.imageURL}
                alt="project-ideas"
                className="img-fluid w-100 h-100"
              />
            </div>
            <div className="card-body h-25">
              <h4 className="card-title text-start">{blog.title}</h4>
              <p className="card-text text-start text-muted">
                by {blog.author}
              </p>
              <div className="d-flex justify-content-between ">
                <p className="card-text text-start text-muted mb-0">{blog.date}</p>
                <p className="card-text text-start text-muted mb-0">
                  {blog.time} min read
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Blogcard;
