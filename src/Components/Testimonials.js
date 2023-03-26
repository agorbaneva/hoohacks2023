import React, { Component } from "react";
import quotesData from '../testimonials.js';

class Testimonials extends Component {
  render() {

    const testimonials = quotesData.map(function(testimonials) {
      return (
        <li >
          <blockquote>
            <p>{testimonials.quote}</p>
            <cite>{testimonials.author}</cite>
          </blockquote>
        </li>
      );
    });

    const randomQuoteIndex1 = Math.floor(Math.random() * quotesData.length);
    const randomQuoteIndex2 = Math.floor(Math.random() * quotesData.length);

    const quote1 = quotesData[randomQuoteIndex1];
    const quote2 = quotesData[randomQuoteIndex2];

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                <li>
                    <blockquote>
                      <p>{quote1.quote}</p>
                      <cite>{quote1.author}</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>{quote2.quote}</p>
                      <cite>{quote2.author}</cite>
                    </blockquote>
                  </li>  
                  
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
