import React from "react";
import ProjectCard from "../sub/ProjectCard";
import  encyptionText  from "../../utils/encyptionText";

const Projects = () => {
    return (
        <div
            className=" flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 z-[20]">
                {encyptionText("Our Projects")}
            </h1>
            <div className="h-full w-full  justify-center flex flex-col md:flex-row gap-10 px-10"style={{flex:1,flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProjectCard
                     src="/store_banner.jpeg"
                    title="BA3 Store"
                    description="Our mobile e-commerce app offers a seamless shopping experience with a wide range of products, secure payments, convenient delivery options. and enjoy exclusive deals and discounts."
                />
                <ProjectCard
                     src="/Business.jpeg"
                    title="BA3 Business Solution"
                    description="Streamline your store management with our solution. Track inventory, manage sales, and analyze performance. Improve customer service with efficient operations and data-driven insights."
                />
                 <ProjectCard
                    src="/resturant_banner.jpeg"
                    title="BA3 Restaurant"
                    description="Our restaurant app lets you discover, explore, and order from a variety of cuisines. Enjoy convenient features like reviews, ratings, and easy online ordering for a delightful dining experience."
                />
                <ProjectCard
                     src="/chat_banner.jpeg"
                    title="BA3 Chat"
                    description="Our chat app offers easy communication with voice and video calls. Stay connected, manage contacts, and enjoy privacy with encrypted messages. Download for seamless communication."
                />
                <ProjectCard
                     src="/tiktok_banner.jpeg"
                    title="BA3 TikTok"
                    description="BA3 TikTok is a creative platform for short videos, where users can showcase their talent. Join the global community and unleash your creativity!"
                />
                <ProjectCard
                     src="/taxi_banner.png"
                    title="BA3 Taxi"
                    description="Our taxi app provides convenient, on-demand rides with just a few taps. pay seamlessly, and reach your destination safely and comfortably."
                />
                <ProjectCard
                     src="/delevery_banner.png"
                    title="BA3 Delivery"
                    description="Our food delivery app offers a variety of cuisines delivered to your doorstep. place orders, and track deliveries for a convenient dining experience."
                />
                   <ProjectCard
                     src="/car_banner.png"
                    title="BA3 Car"
                    description="Find your perfect car with ease on our platform. compare prices, and connect with sellers to negotiate and purchase your next vehicle hassle-free."
                />
                <ProjectCard
                     src="/clicn_banner.png"
                    title="BA3 Clinc"
                    description="Book appointments with ease using our app. Find doctors and Receive reminders and manage your health appointments conveniently."
                />
                   <ProjectCard
                     src="/trade_banner.png"
                    title="BA3 Trading"
                    description="Trade cryptocurrencies securely on our platform. execute trades with ease. Start trading and managing your crypto portfolio today."
                />

                <ProjectCard
                     src="/school_banner.png"
                    title="BA3 School"
                    description="Our school management system simplifies administrative tasks. Communicate with parents and staff efficiently for a smoother school operation."
                />
                <ProjectCard
                     src="/airline_banner.png"
                    title="BA3 Airline"
                    description="Book flights effortlessly with our airline booking app. Search for flights, compare prices, and reserve seats quickly. all in one place."
                /> 
            </div>

            {/* <h1 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"></h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
               
            </div>

            <h1 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5"></h1>

            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            
            </div> */}

        </div>
    );
};

export default Projects;
