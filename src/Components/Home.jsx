
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home container d-flex flex-column justify-content-center align-items-center">

        <p className="lead fs-4">
          <h1>Tech Career Progrom</h1>

          <ul>
            <li>Mentors from Top Global Product companies.</li>
            <li>A Portfolio of Real-world Projects.</li>
            <li>Globally Recognized Certification.</li>

          </ul>
        </p>
        <Link
          to="blogs/all"
          className="btn btn-outline-success btn-lg d-flex align-items-baseline"
        >
          Explore <i class="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>
    </>
  );
};

export default Home;
