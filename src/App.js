import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "pages/About";
import Blog from "pages/Blog";
import Collaborate from "pages/Collaborate";
import Contact from "pages/Contact";
import Events from "pages/Events";
import Home from "pages/Home";
import Mentorship from "pages/Mentorship";
import Team from "pages/Team";
import Workshops from "pages/Workshops";
import NotFound404 from "pages/NotFound404";
import NavBar from "components/NavBarComponent";
import Social from "components/Social";
import Footer from "components/Footer";
import { Routes as SiteRoutes } from "Constants";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Social />
          <NavBar />
        </header>

        <Routes>
          <Route path={SiteRoutes.NotFound404} element={<NotFound404 />} />
          <Route exact path={SiteRoutes.Home} element={<Home />} />
          <Route exact path={SiteRoutes.Workshops} element={<Workshops />} />
          <Route exact path={SiteRoutes.Mentorships} element={<Mentorship />} />
          <Route exact path={SiteRoutes.Events} element={<Events />} />
          <Route exact path={SiteRoutes.Blog} element={<Blog />} />
          <Route exact path={SiteRoutes.Team} element={<Team />} />
          <Route exact path={SiteRoutes.About} element={<About />} />
          <Route exact path={SiteRoutes.Contacts} element={<Contact />} />
          <Route exact path={SiteRoutes.Collaborate} element={<Collaborate />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
