import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  constructor() {

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Testimonials />
        <Skills />
        <Careers />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
