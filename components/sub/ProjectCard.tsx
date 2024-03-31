// import Image from "next/image";
import React,{useEffect,useState,useContext} from "react";
import  encyptionText  from "../../utils/encyptionText";
import { LanguageContext } from "@/context/languageContext";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description}: Props) => {
    const hasWindow = typeof window !== 'undefined';

    const [width, setwidth] = useState(hasWindow?window.innerWidth:9);
    useEffect(() => {
        const handleResize = () => {
          setwidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const { languageType,LanguageChangeHandler } = useContext(LanguageContext);

    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"style={{width:width>780?"25%":"100%"}}>
            <img
                src={src}
                alt={title}
                width={1000} 
                height={1000}
                className="w-full object-contain"
            />

            <div 
             
            className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{encyptionText(title,{withTranslate:false})}</h1>
                <p 
                 style={{direction:languageType=="ar"?"rtl":"ltr"}}
                className="mt-2 text-gray-300">{encyptionText(title)}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
