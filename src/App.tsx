import React, { useState } from "react";
import "./App.scss";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [pageClass, setPageClass] = useState("");
  const [menuClass, setMenuClass] = useState("");
  const [menuButtonClass, setMenuButtonClass] = useState("");
  return (
    <div className="App">
      <Menu
        setMenuClass={setMenuClass}
        setPageClass={setPageClass}
        menuButtonClass={menuButtonClass}
        setMenuButtonClass={setMenuButtonClass}
        menuClass={menuClass}
      />
      <Switch location={location}>
        <div className={`page_container ${pageClass}`}>
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
        </div>
      </Switch>
    </div>
  );
}

export default App;
