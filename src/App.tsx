import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Landing from "./components/Landing";
import Particle from "./components/Particle";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();
  const [animate, setAnimate] = useState(true);
  return (
    <div className="App">
      <Menu />
      <TransitionGroup>
        <CSSTransition
          in={animate}
          timeout={1000}
          classNames="block"
          key={location.key}
          unmountOnExit
        >
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/work">
              <Work />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
