import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { pages } = props;
  return (
    <React.Fragment>
      <header className="header">
        <nav className="menu-bar">
          <div className="menu">
          {props.pages.map((page) => 
            <a 
            className="menu-item"
            href={page.link}>
              {page.name}
            </a>
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