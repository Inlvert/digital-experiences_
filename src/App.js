import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import WorksPage from "./pages/WorksPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/ContactPage";
import Header from "./components/Header";
import LogoBar from "./components/LogoBar";
import AbotuMe from "./components/AboutMe";
import ServicesComp from "./components/ServicesComp";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
          <Route path="/works">
            <WorksPage />
          </Route>
          <Route path="/">
            <AboutPage />
            <Header/>
            <LogoBar/>
            <AbotuMe />
            <ServicesComp/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
