import React from 'react';
import { Link } from 'react-router-dom';
import "./components/header.css"

const Header = () => {
  return (
    <section>
      <h1>Stop, Header Time</h1>
        <div className = "topnav">
            <div className="tab-content">
                <a className="active" href="/#">
                    <Link to="/">HOME</Link>
                    <Link to="/things/meat/">meat</Link>
                    <Link to="/things/cheese/">cheese</Link>
                    <Link to="/things/bread/">bread</Link>
                    <Link to="/special-page/">something else</Link>
                    <Link to="/addanimals">Add Animal</Link>
                    <Link to="/animalslist">Animals</Link>
                    <Link to="/no-sir-i-dont-like-it/">a 404</Link>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Header;
