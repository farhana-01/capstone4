import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Trimer.css"
import {useNavigate} from "react-router-dom"

const Trimer = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.priceoye.pk/vgr-zero-t-blade-trimmer-v-030-pakistan-priceoye-c2lke-270x270.webp",
      title: "VGR Zero T-Blade Trimmer - V-030",
      currentPrice: 4549,
      originalPrice: 7399,
      discountPercentage: 39,
      rating: 5.0,
      reviews: 17,
    },
    {
      id: 2,
      image:
        "https://images.priceoye.pk/kemei-km-1613-hair-clippers-men-professional-electric-trimmer-pakistan-priceoye-1b36i-270x270.webp",
      title: "Kemei Km-1613 Hair Clippers Men Professional Electric Trimmer",
      currentPrice: 4999,
      originalPrice: 7000,
      discountPercentage: 29,
      rating: 4.9,
      reviews: 38,
    },
    {
    id: 3,
    image:
      "https://images.priceoye.pk/kemei-3-in-1-rechargeable-electric-shaver-trimmer-km-6332-pakistan-priceoye-l0abn-270x270.webp",
    title: "KEMEI 3 In 1 Rechargeable Electric Shaver & Trimmer KM-6332",
    currentPrice: 13499,
    originalPrice: 20000,
    discountPercentage: 33,
    rating: 4.5,
    reviews: 5,
  },
  {
    id: 4,
    image:
      "https://images.priceoye.pk/vgr-stainless-steel-blade-trimmer-v-031-pakistan-priceoye-qyjpu-270x270.webp",
    title: "VGR Stainless Steel Blade Trimmer - V-031",
    currentPrice: 4611,
    originalPrice: 7199,
    discountPercentage: 36,
    rating: 4.7,
    reviews: 30,
  },
  {
    id: 5,
    image:
      "https://images.priceoye.pk/kemei-km-6331-3-in-1-grooming-kit-with-usb-charging-pakistan-priceoye-v2fgq-270x270.webp",
    title: "Kemei KM-6331 3 in 1 Grooming Kit with USB Charging",
    currentPrice: 10518,
    originalPrice: 14000,
    discountPercentage: 25,
    rating: 4.6,
    reviews: 13,
  },
  {
    id: 6,
    image:
      "https://images.priceoye.pk/remington-pilot-personal-groomer-kit-pg180-pakistan-priceoye-i31xi-270x270.webp",
    title: "REMINGTON Pilot Personal Groomer Kit PG180",
    currentPrice: 49799,
    originalPrice: 69999,
    discountPercentage: 29,
    rating: 4.7,
    reviews: 7,
  },

  {
    id: 7,
    image:
      "	https://images.priceoye.pk/realme-watch-pakistan-priceoye-g61ky-270x270.webp",
    title: "REMINGTON Pilot Personal Groomer Kit PG180",
    currentPrice: 5499,
    originalPrice: 6000,
    discountPercentage: 8,
    rating: 5.0,
    reviews: 1,
  },
  {
    id: 8,
    image:
      "	https://images.priceoye.pk/dinglong-professional-beard-and-hair-trimmer-rf-609-pakistan-priceoye-gu6ki-270x270.webp",
    title: "Kemei 7 in 1 Grooming Kit Shaving Machine Set KM-580",
    currentPrice: 4999,
    originalPrice: 10500,
    discountPercentage: 52,
    rating: 4.8,
    reviews: 11,
  },
  {
    id: 9,
    image:
      "https://images.priceoye.pk/kemei-7-in-1-grooming-kit-shaving-machine-set-km-580-pakistan-priceoye-xu1d2-270x270.webp",
    title: "Dingling Professional Rf 608B",
    currentPrice: 3811,
    originalPrice: 9990,
    discountPercentage: 62,
    rating: 4.8,
    reviews: 537,
  },
  {
    id: 10,
    image:
      "https://images.priceoye.pk/dingling-professional-rf-608b-pakistan-priceoye-47iad-270x270.webp",
    title: "Kemei KM-6330 Hair & Beard Trimmer 3 in 1",
    currentPrice: 3899,
    originalPrice: 6999,
    discountPercentage: 44,
    rating: 4.6,
    reviews: 14,
  },
  
];

 const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('https://static.priceoye.pk/images/categories/section-trimmers-shaver-bg-md.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[100%] h-[300px] lg:h-[450px] bg-gray"
      >
        <Box className="container mx-auto pt-7 mb:pt-16 pb-7 flex justify-between items-center px-3">
          <Typography className="text-white" variant="h5">
          Latest Trimmers Shaver
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View all
          </Button>
        </Box>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          grid={{
            rows: 2,
          }}
          spaceBetween={15}
          navigation={true}
          modules={[Grid, Navigation]}
          className="customSwiper container mx-auto"
        >
          {products.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white rounded-lg mx-3 !w-72 !px-5 cursor-pointer drop-shadow-md"
            >
              <Box className="flex flex-col justify-center items-center !mt-5">
                <Box className="text-center">
                  <img className="w-28" src={item.image} alt={item.title} onClick={()=>{navigate(`/trimer-Detail/${item?.id}`)}} />
                  <Box className="flex items-center bg-[#FBF7EB] px-2 rounded-full relative -left-16 -top-2">
                    <Typography className="!text-sm">
                      <FontAwesomeIcon
                        className="text-[#FFC61C]"
                        icon={faStar}
                      />{" "}
                      {item.rating}
                    </Typography>
                    <Typography className="!text-[11px] ps-2">
                      {item.reviews} Reviews
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex flex-col items-start gap-3 mt-4 w-60 text-start pb-4">
                  <Typography className="!text-[15px]">{item.title}</Typography>
                  <Typography className="!font-semibold !text-xl lining-nums">
                    <span className="text-sm font-medium relative -top-2">Rs</span>{" "}
                    {item.currentPrice}
                  </Typography>
                  <Box className="flex justify-between items-center w-full pb-2">
                    <Typography className="!text-sm lining-nums line-through decoration-red-500 text-slate-400">
                      <span className="text-xs relative -top-2">Rs</span>{" "}
                      {item.originalPrice}
                    </Typography>
                    <Typography className="!font-normal !text-xs text-[#1EB688] bg-[#F0FAF7] rounded-full px-1">
                      {item.discountPercentage}% OFF
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Trimer;
