import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark color ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-brand" to="">
            <img
              src="https://www.freeiconspng.com/uploads/movie-icon-29.png"
              width="65"
              alt="Movie Icon"
            />
          </Link>
          <ul className="navbar-nav width">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <h4 className="color_brown">MOVIES</h4>
              </Link>
            </li>
            <li>
              <Link to="/favourites">
                <button className="btn-style-nav col-2">
                  <i className="fa fa-solid fa-star btn-style-nav"></i>
                </button>
              </Link>
            </li>
            <li>
              <p className="btn-style-nav">
                {useSelector((state) => {
                  return state.counter;
                })}
              </p>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/favourites">
              <h4 className="color_brown">FAVOURITES</h4>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <h4 className="color_brown">LOGIN</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <h4 className="color_brown"> REGISTER</h4>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
