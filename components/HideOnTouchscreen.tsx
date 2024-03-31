'use client';

import React, { useState, useEffect ,useContext} from 'react';
import { motion } from 'framer-motion';
import { MouseContext } from "@/context/mouse-context";

const HideOnTouchscreen = () => {


    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = (e: { clientX: any; clientY: any; }) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
      
      }

      const [isTouchscreen, setIsTouchscreen] = useState(true);

      useEffect(() => {
          const checkTouchscreen = () => {
              setIsTouchscreen('ontouchstart' in window || navigator.maxTouchPoints!=0);
          };
      
          checkTouchscreen();
      
          window.addEventListener('touchstart', checkTouchscreen);
          window.addEventListener('mousedown', checkTouchscreen);
      
          return () => {
              window.removeEventListener('touchstart', checkTouchscreen);
              window.removeEventListener('mousedown', checkTouchscreen);
          };
      }, []);
    return (
      
      <div>
      {!isTouchscreen &&  <motion.img 
        src={cursorType+'.png'}
        className="cursor" style={{   zIndex: 100 }}variants={variants}animate={cursorVariant}/>}
  </div>
      
    );
};

export default HideOnTouchscreen;