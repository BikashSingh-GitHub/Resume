import React from "react";

import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";
import Navbar4 from "./Navbar4";
import Mainpage from "./Mainpage"
import WorkExperience from "./WorkExperience";
import Homepage from "./Homepage";
import "./Navbar.css"

function App() {
  return (
    <div className="flex flex-col h-screen">
    
      <Navbar />
      <Navbar3 />
      <Navbar4 />

     
      {/* <Navbar2 />
      <Mainpage />
      <Navbar1 />
      
      <WorkExperience/>
      <Homepage /> */}
      
    </div>
  );
}

export default App;
