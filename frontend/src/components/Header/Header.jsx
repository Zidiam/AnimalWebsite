import React from 'react';
import { Link } from 'react-router-dom';
import "./components/header.css"

const Header = () => {
  return (
    <section>
        <div className = "topnav">
            <div className="tab-content">
                <a className="active" href="/#">
                    <Link to="/">HOME</Link>
                    <Link to="/addanimals">Add Animal</Link>
                    <Link to="/animalslist">Animals</Link>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Header;
