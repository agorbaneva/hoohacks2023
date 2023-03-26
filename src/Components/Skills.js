import React, { Component } from "react";
import Slide from "react-reveal";
import Testimonials from "./Testimonials";

class Skills extends Component {

  render() {
    if (!this.props.data) return null;

    const testimonials = this.props.data.testimonials.map(function(testimonials) {
      return (
        <li key={testimonials.user}>
          <blockquote>
            <p>{testimonials.text}</p>
            <cite>{testimonials.user}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      
      <section id="skills">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{Testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
