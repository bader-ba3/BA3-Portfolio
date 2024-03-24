import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                     src="/store_banner.jpeg"
                    title="Ba3 Store"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/abc.jpeg"
                    title="Ba3 Busniss solution"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/clicn_banner.png"
                    title="Ba3 Clinc"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                   <ProjectCard
                     src="/trade_banner.png"
                    title="Ba3 Trading"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>

            <h1 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"></h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                     src="/tiktok_banner.jpeg"
                    title="Ba3 TikTok"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/taxi_banner.png"
                    title="Ba3 Taxi"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/delevery_banner.png"
                    title="Ba3 Delevery"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                   <ProjectCard
                     src="/car_banner.png"
                    title="Ba3 Car"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>

            <h1 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"></h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/resturant_banner.jpeg"
                    title="Ba3 Restaurant"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/chat_banner.jpeg"
                    title="Ba3 Chat "
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/school_banner.png"
                    title="Ba3 School"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                     src="/airline_banner.png"
                    title="Ba3 Airline"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                /> 
            </div>

        </div>
    );
};

export default Projects;
