import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { pages } = props;
  return (
    <React.Fragment>
      <header class="header">
        <nav class="menu-bar">
          <p class="menu">
          {props.pages.map((page) => 
            <div>
              <a 
              className="menu-item"
              href={page.link}>
                {page.name}
              </a>
            </div>
          )}
          </p>
        </nav>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  pages: PropTypes.array
};

export default Header;