import React from "react";
import Vypis from "./components/vypis";
import "./css/styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Vypis text="daco" />
    </div>
  );
};

export default App;
