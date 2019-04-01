import React, { Component } from "react";
import BannerTag from "../../Components/Home/BannerTag/BannerTag";
import Intro from "../../Components/Home/Intro/Intro";
import Features from "../../Components/Home/Features/Features";
import Footer from "../../Components/Home/Footer/Footer";
import Testimonial from "../../Components/Home/Testimonials/Testimonial";

class Home extends Component {
    render() {
        return(
            <div>
                <BannerTag />
                <Intro />
                <Features />
                <Testimonial />
                <Footer />
            </div>
        )
    }
}

export default Home;