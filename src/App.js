//Global Style
import React, { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Import util
import data from "./util";

function App() {
  const location = useLocation();
  //State
  const [ cardInfo ] = useState(data());
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/portfolio">
            <Portfolio cardInfo={cardInfo} />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
