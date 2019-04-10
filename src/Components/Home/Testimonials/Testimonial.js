import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Testimonial.css';
import { Carousel } from 'react-responsive-carousel';

class Testimonial extends Component {
    render() {
        return (
            <div>
                <h2 className="TestimonialHead">What People Think About Us</h2>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showIndicators={false}
                >
                    <div className="Testimonial">
                        <img />
                        <h2>"Explicit!!"</h2>
                        <p className="Review">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <h3>- John Doe</h3>
                    </div>
                    <div className="Testimonial">
                        <img />
                        <h2 className="">"Explicit!!"</h2>
                        <p className="Review">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <h3>- John Doe</h3>
                    </div>
                    <div className="Testimonial">
                        <img />
                        <h2 className="">"Explicit!!"</h2>
                        <p className="Review">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <h3>- John Doe</h3>
                    </div>
                </Carousel>
            </div>

        );
    }
}

export default Testimonial;