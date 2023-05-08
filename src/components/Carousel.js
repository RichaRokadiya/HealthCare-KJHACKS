import { useState, useEffect } from 'react'
import svg1 from '../assets/svg1.svg'
import svg2 from '../assets/svg2.svg'
import svg3 from '../assets/svg3.svg'

function Carousel() {
        const [activeIndex, setActiveIndex] = useState(0);
        const svgs = [svg1, svg2, svg3];
      
        useEffect(() => {
          const interval = setInterval(() => {
            setActiveIndex((activeIndex) => (activeIndex + 1) % svgs.length);
          }, 3000);
          return () => clearInterval(interval);
        }, [svgs.length]);

  return (
    <div className="relative h-[40rem]">
      {svgs.map((svg, index) => (
        <img
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          src={svg}
          alt={`svg ${index + 1}`}
        />
      ))}
</div> 
  )
}

export default Carousel