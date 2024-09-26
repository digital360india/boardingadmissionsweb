import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SchoolCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 464); // Mobile view breakpoint
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = isMobile
    ? ["https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Fboardingbanner.jpeg?alt=media&token=0b86327a-e783-457d-8446-0ac5e82f5781", "https://firebasestorage.googleapis.com/v0/b/boardingadmissions-f3ba3.appspot.com/o/images%2Fboardingcup.jpeg?alt=media&token=aa190a65-0e1b-4aa1-8545-5cf3d8733aa5"] // Mobile images
    : [
        "https://firebasestorage.googleapis.com/v0/b/bookify-faedc.appspot.com/o/banner1.png?alt=media&token=25e52b21-cad7-4e3f-adaa-521f15a6f7a9",
        "/images/banner3.jpg",
        "/images/banner3.jpg",
      ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative w-full">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        arrows={false}
        containerClass="carousel-container"
        itemClass="carousel-item"
        dotListClass="custom-dot-list-style"
        dotClass="custom-dot"
        renderArrowsWhenDisabled={false} // Disable default arrows
      >
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[620px] object-cover transition duration-300" // Ensure image height is responsive
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SchoolCarousel;
