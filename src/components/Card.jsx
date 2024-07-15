import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaDollarSign } from "react-icons/fa";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Card = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("/EstateData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="500">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 100,
          stretch: 200,
          depth: 2000,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id} className="">
              <div className="card bg-white md:glass w-[90vw] md:w-[450px] mx-auto mb-5">
                <figure>
                  <img src={item.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.estate_title}</h2>
                  <p className="font-extralight">{item.description.slice(0,100)}</p>
                  <p className="font-extralight">{item.location}</p>
                  <p className="font-extralight">{item.area}</p>
                  <p className="">Status: {item.status}</p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      {item.facilities[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      {item.facilities[1]}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                      {item.facilities[2]}
                    </span>
                  </div>
                  <div className="card-actions justify-between">
                    <button className="btn btn-ghost"><FaDollarSign size={18}/>{item.price}</button>
                    <NavLink to={`/estates/${item.id}`} className="btn btn-primary">View Details</NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Card;
