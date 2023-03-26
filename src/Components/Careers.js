import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Careers extends Component {
  render() {

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Careers;
