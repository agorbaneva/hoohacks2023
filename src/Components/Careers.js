import React, { Component } from "react";
import Slide from "react-reveal";

class Careers extends Component {

  render() {

    return (
      <section id="careers">

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">Work</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Careers;
