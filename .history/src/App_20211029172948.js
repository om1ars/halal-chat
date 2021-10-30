import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Rout0e path="/">
            <Home />
          </Rout0e>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
