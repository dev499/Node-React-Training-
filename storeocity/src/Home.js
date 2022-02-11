import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h2>Welcome To Storeocity</h2>
        <Link to={'/categories'}><button type="button" class="btn btn-light btn-lg">Shop Now ➜</button></Link>
      </div>
    </div>
  );
}

export default Home;
