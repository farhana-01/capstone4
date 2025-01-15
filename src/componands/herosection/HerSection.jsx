import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Img1 from "../assits/pakistan-priceoye-slider-jlb2p.jpg";
import Img2 from "../assits/pakistan-priceoye-slider-kvijy.jpg";
import Img3 from "../assits/pakistan-priceoye-slider-l8bv7.jpg";
import Img4 from "../assits/pakistan-priceoye-slider-r8jlg.jpg";
import Img5 from "../assits/pakistan-priceoye-slider-rsyab.jpg";
import Img6 from "../assits/pakistan-priceoye-slider-wuoul.jpg";
import Img7 from "../assits/pakistan-priceoye-slider-y35ps.jpg";
import Banner from "../assits/sale-campaign-banner-p8vzf.gif";

import { Navigation, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';

const HeroSection = () => {
  const heroImages = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
    { id: 7, image: Img7 },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Navigation, Autoplay]}
      >
        {heroImages.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Hero Slide" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Box className="py-5 lg:py-7 md:px-12 bg-slate-100">
        <img src={Banner} alt="Campaign Banner" />
      </Box>
    </>
  );
};

export default HeroSection;
