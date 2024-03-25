import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';

      
    const [width, setWidth]   = useState(hasWindow?window.innerWidth:0);
    const [height, setHeight] = useState(hasWindow?window.innerHeight:0);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        setWidth(1130);
        setHeight(window.innerHeight);
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

  return {height, width}
}