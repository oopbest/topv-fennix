// components/SliderSync.tsx
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ProductImage } from "@/interfaces/dto/product-detail.dto";

interface SliderSyncProps {
  productImages: ProductImage[];
}

const SliderSync = ({ productImages }: SliderSyncProps) => {
  const mainSliderRef = useRef<Slider>(null);
  const navSliderRef = useRef<Slider>(null);
  // const [navFor, setNavFor] = useState<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index on slide change
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  // Main slider settings
  const mainSliderSettings = {
    // asNavFor: navFor,
    ref: mainSliderRef,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    beforeChange: (oldIndex: number, newIndex: number) =>
      handleSlideChange(newIndex),
  };

  // Navigation slider settings
  const navSliderSettings = {
    // asNavFor: mainSliderRef.current,
    ref: navSliderRef,
    arrows: false,
    slidesToShow: productImages.length >= 3 ? 3 : productImages.length, // Show up to 3 thumbnails or less
    focusOnSelect: true,
    centerMode: true,
    swipeToSlide: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      handleSlideChange(newIndex),
  };

  // Set nav slider after initial render
  React.useEffect(() => {
    // if (navSliderRef.current) {
    //   setNavFor(navSliderRef.current);
    // }
    const goToSlide = () => {
      mainSliderRef.current?.slickGoTo(activeIndex);
    };
    goToSlide();
  }, [activeIndex]);

  return (
    <div>
      <div className="main-slider">
        <Slider {...mainSliderSettings}>
          {productImages.map(
            ({ url, alt, type, video_url, video_title }, idx) => (
              <div key={idx}>
                {type === "external-video" ? (
                  <iframe
                    className="w-full aspect-square"
                    src={video_url}
                    title={video_title}
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Image
                    width={800}
                    height={800}
                    key={idx}
                    src={url}
                    alt={alt}
                    className="max-w-full"
                  />
                )}
              </div>
            )
          )}
        </Slider>
      </div>
      <div className="nav-slider mt-4">
        <Slider {...navSliderSettings}>
          {productImages.map(({ url, alt }, idx) => (
            <div key={idx} className="slick-item px-1 mt-2">
              <Image
                width={200}
                height={200}
                src={url}
                alt={alt}
                className={`max-w-full cursor-pointer rounded ${
                  idx === activeIndex ? "border-2 border-theme-color" : "border"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSync;
