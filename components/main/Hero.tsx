import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
    return (
        <div className="flex flex-col h-full w-full mt-0" id="about-us">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-40%]  h-full w-full left-0 z-[-10] object-cover "
            >
                <source src="/blackhole.mp4" type="video/mp4"/>
            </video>
            <HeroContent/>
        </div>
    );
};

export default Hero;
