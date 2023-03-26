import React, { Component } from "react";
import Slide from "react-reveal";

class Skills extends Component {

  render() {

    return (
      <section id="resume">

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

export default Skills;
