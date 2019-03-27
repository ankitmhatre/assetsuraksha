import React, { Component } from "react";
import BannerTag from "../../Components/Home/BannerTag/BannerTag";
import Intro from "../../Components/Home/Intro/Intro";
import Features from "../../Components/Home/Features/Features";

class Home extends Component {
    render() {
        return(
            <div>
                <BannerTag />
                <Intro />
                <Features />
            </div>
        )
    }
}

export default Home;