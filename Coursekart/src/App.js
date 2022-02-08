import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Home";
import SignUp from "./SignUp";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
