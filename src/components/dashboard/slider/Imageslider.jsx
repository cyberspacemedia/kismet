import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./slider.css"; // Import CSS file for styling

const Imageslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Original images array
    const originalImages = useMemo(
        () => [
            "./StaticAssets/Images/banner1.png",
            "./StaticAssets/Images/banner2.png",
            "./StaticAssets/Images/banner3.png",
        ],
        []
    );

    // Duplicate the images to achieve continuous looping
    const images = useMemo(
        () => [...originalImages, ...originalImages],
        [originalImages]
    );

    // Function to switch to the next slide
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images]);

    // Autoplay functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // 2 second delay

        return () => clearInterval(intervalId);
    }, [nextSlide]);

    return (
        <div className="slider-container">
            <div
                className="slider-images"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="slider-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default Imageslider;
