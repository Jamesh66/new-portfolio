//Global Style
import React, { useState, useRef } from "react";
import GlobalStyle from "./components/GlobalStyle";
//Import hooks
import { useOnClickOutside } from "./Hook";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import SideDrawerToggleButton from "./components/SideDrawer/SideDrawerToggleButton";
//Import side drawer
import SideDrawer from "./components/SideDrawer/SideDrawer";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
//Import util
import data from "./util";

function App() {
  //State
  const [cardInfo] = useState(data());
  const [open, setOpen] = useState(false);
  //Access DOM Node
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <div ref={node}>
        <Nav />
        <SideDrawerToggleButton open={open} setOpen={setOpen} />
        <SideDrawer open={open} setOpen={setOpen} />
      </div>
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
