import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col gap-10 md:gap-1 md:flex-row max-w-[1175px] mx-auto justify-center items-center mt-10">
      <div
        className="text-center  md:text-start space-y-5"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <h1 className="text-3xl font-bold">
          Welcome to <span className="text-orange-600">Dream</span> Home
        </h1>
        <p className="px-[70px] md:px-[0px]">
          Discover your dream home with our user-friendly platform, diverse
          listings, and expert guidance. Your perfect property is just a click
          away. Welcome home.
        </p>
      </div>
      <div
        className="carousel w-[95vw] h-[400px] rounded-xl"
        data-aos="fade-left"
        data-aos-delay="500"
      >
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/Banner/b1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/Banner/b2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/Banner/b3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/Banner/b4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
