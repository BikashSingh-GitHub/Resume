import React from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
