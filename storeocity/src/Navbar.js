import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <img
          src="https://previews.123rf.com/images/nitarismayanti/nitarismayanti2006/nitarismayanti200600129/150364199-.jpg"
          alt=""
          width="30"
          height="33"
          className="d-inline-block align-text-top"
        />
        <Link to={'./'}>
        <a className="navbar-brand" href="#" style={{marginLeft:'14px', color:'beige',textDecorationColor:'#0d6efd'}}>
          STOREOCITY
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{width:'40%', marginLeft:'30%'}}
          />
        </div>
        <Link to={'/signin'}>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginRight: "10px", borderColor:'aliceblue' }}
        >
          Log IN
        </button>
        </Link>
        <Link to={'/'} >
        <button type="button" className="btn btn-danger">
          Log Out
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
