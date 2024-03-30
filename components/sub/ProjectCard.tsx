import Image from "next/image";
import React from "react";
import  encyptionText  from "../../utils/encyptionText";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description}: Props) => {
    return (
        <div className="relative w-[25%]  overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />

            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{encyptionText(title,{withTranslate:false})}</h1>
                <p className="mt-2 text-gray-300">{encyptionText(description)}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
