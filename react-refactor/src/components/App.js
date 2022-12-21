import React, { useState } from 'react';
import Header from "./Header";
import PageControl from "./PageControl";
import db from "../assets/database.json";

function App() {
  const [selectedPage, setSelectedPage] = useState(null);
  
  return (
    <React.Fragment>
      <Header 
        pages={db.pages} />
      <PageControl />
    </React.Fragment>
  );
}

export default App;
