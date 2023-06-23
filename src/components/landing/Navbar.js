import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Signin from '../Auth/Signin'
import WeatherApp from './WeatherApp';

import YouTubeVideos from './Youtube';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '50px' }}>
            <i className="flaticon-043-teddy-bear"></i>
            <span className="text-primary">KidKinder</span>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <Link to="/home" className="nav-item nav-link">home</Link>
              <Link to="/YouTubeVideos" className="nav-item nav-link">lectuers</Link>
              <Link to="/Admin" className="nav-item nav-link">Admin</Link>

              {/* <Link to="/UserProfile" className="nav-item nav-link">UserProfile</Link> */}
              <Link to="/SignUp" className="nav-item nav-link px-2">SignUp</Link>
              <Link to="/Login" className="nav-item nav-link px-2">Login</Link>

              {/* <Link to="/">Home</Link> */}

            </div>

            {/* <a href="/" className="btn btn-primary px-4">
            {/* <Signin/> */}
            {/* </a> */}
            <a href="" class="btn btn-primary px-4">Signin</a>
            <Link to="/User/UserProfile" class="nav-item nav-link px-4"> <span class="material-symbols-outlined">
            person
            </span></Link>

          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
