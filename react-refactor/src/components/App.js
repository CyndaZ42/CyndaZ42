import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import
import db from "../assets/database.json";

function App() {
  const [selectedPage, setSelectedPage] = useState(null);
  
  return (
    <React.Fragment>
      <Header 
        pages={db.pages} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
