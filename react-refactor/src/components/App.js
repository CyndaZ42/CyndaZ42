import React from "react";
import Header from "./Header";
import db from "../assets/database.json"

function App() {
  return (
    <React.Fragment>
      <Header 
        pages={db.pages} />
    </React.Fragment>
  );
}

export default App;
