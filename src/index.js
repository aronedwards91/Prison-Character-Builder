import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import { ThemeProvider, createTheme } from "arwes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Transmission from "./pages/transmission";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <Router>
        <Switch>
          <Route path="/transmission">
            <Transmission />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
