"use client" 

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/images/pexels-tony-schnagl-6468730.jpg",
    "/images/pexels-tima-miroshnichenko-6847470.jpg",
    "/images/pexels-tony-schnagl-6468935.jpg"
];

const HeaderImage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // cleanup @ unmount
    }, []);

    return (
        <div className="h-60 relative overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-1000 ease-in-out" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="h-full w-full relative">
                        <Image 
                            src={src}
                            alt={`Header Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeaderImage;