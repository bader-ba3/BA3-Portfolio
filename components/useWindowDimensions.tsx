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
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

  return hasWindow ?[height, width]:[0,0];
}