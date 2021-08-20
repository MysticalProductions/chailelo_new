import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AboutUs, ContactUs, CSR, Gallery, Home, Menu } from "./pages";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <Switch>
      <Route exact path="/aboutus">
        <AboutUs />
      </Route>
      <Route exact path="/contactus">
        <ContactUs />
      </Route>
      <Route exact path="/csr">
        <CSR />
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
