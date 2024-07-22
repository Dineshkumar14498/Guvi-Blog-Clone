import React from "react";
import { NavLink, Outlet} from "react-router-dom"

const Blogs = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card-group my-4">
          <NavLink
            to="all"
            className={({ isActive }) =>
              `${
                isActive ? "activeLink " : "pendingLink "
              }card p-3 fs-5`
            }
          >
            All
          </NavLink>
          <NavLink
            to="fullstack"
            className={({ isActive }) =>
              `${
                isActive ? "activeLink " : "pendingLink "
              }card p-3 fs-5`
            }
          >
            Full Stack
          </NavLink>
          <NavLink
            to="datascience"
            className={({ isActive }) =>
              `${
                isActive ? "activeLink " : "pendingLink "
              }card p-3 fs-5`
            }
          >
            Data Science
          </NavLink>
          <NavLink
            to="cybersecurity"
            className={({ isActive }) =>
              `${
                isActive ? "activeLink " : "pendingLink "
              }card p-3 fs-5`
            }
          >
            Cyber Security
          </NavLink>
          <NavLink
            to="career"
            className={({ isActive }) =>
              `${
                isActive ? "activeLink " : "pendingLink "
              }card p-3 fs-5`
            }
          >
            Career
          </NavLink>
              </div>
              <hr className="container border border-black"/>
        <Outlet />
      </div>
    </>
  );
};

export default Blogs;