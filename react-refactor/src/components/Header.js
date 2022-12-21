import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

function Header(props) {
  const { pages } = props;
  return (
    <React.Fragment>
      <header className="header">
        <nav className="menu-bar">
          <div className="menu">
          {props.pages.map((page) => 
            <Link to={page.link}
            className="menu-item">
              {page.name}
            </Link>
          )}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  pages: PropTypes.array
};

export default Header;