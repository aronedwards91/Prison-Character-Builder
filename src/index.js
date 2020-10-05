import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
} from "arwes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Transmission from "./pages/transmission";

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: ["/sound/click.mp3"] }, // The settings to pass to Howler
    },
    typing: {
      sound: { src: ["/sound/typing.mp3"] },
      settings: { oneAtATime: true }, // The custom app settings
    },
    deploy: {
      sound: { src: ["/sound/deploy.mp3"] },
      settings: { oneAtATime: true },
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(mySounds)}>
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
      </SoundsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
