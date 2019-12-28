import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Vive BaguetteTordue</div>
        <img
          className="Baguette"
          src="http://a53.idata.over-blog.com/600x449/2/39/46/30/2010--juin-a-decembre-/09-Septembre-2010/CIMG5168.JPG"
          alt="baguette"
        />
      </header>
    </div>
  );
};

export default App;
