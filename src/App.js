import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

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
      </div>
    );
  }
}

export default App;
