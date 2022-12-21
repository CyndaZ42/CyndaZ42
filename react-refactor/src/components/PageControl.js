import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

function PageControl() {

  let currentlyVisibleState = null;

  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

export default PageControl;