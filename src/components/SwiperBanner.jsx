import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SwiperBanner = ({ BooksData }) => {
  return (
    <div className="w-11/12 mx-auto py-6 sm:py-8 lg:py-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          }
        }}
      >
        {BooksData.map((app) => (
          <SwiperSlide key={app.id}>
            <div
              className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center rounded-lg sm:rounded-xl"
              style={{ backgroundImage: `url(${app.coverImage})` }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;