"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "fade",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    "/images/banner-cocogu.jpg",
    "/images/banner-cocogu.jpg",
    // "/images/alectric-1-11-23-Banner-06-3840x1801.png",
    // "/images/alectric-1-11-23-Banner-07-3840x1801.png",
  ];

  return (
    <div className="max-w-full mb-20">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={1200}
              height={553}
              src={image}
              alt={`Slide ${index + 1}`}
              className="max-w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
