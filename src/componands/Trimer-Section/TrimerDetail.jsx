import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "./TrimmerSlice";

const TrimerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

console.log(products,'product');

  const product = products.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch()


  if (!product) {
    return (
      <Typography variant="h4" className="text-center">
        Product Not Found
      </Typography>
    );
  }
  const handleBuyNow = () => {
    navigate("/order-delvry", { state: { product } });
    dispatch(addToCart(product))
  };
  return (
    <Box className="container mx-auto p-5">
      <Box className="flex flex-col md:flex-row gap-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-cover"
        />
        <Box>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="h6" className="text-green-500">
            Rs {product.currentPrice}
          </Typography>
          <Typography className="line-through text-gray-500">
            Rs {product.originalPrice}
          </Typography>
          <Typography>
            <strong>{product.discountPercentage}% OFF</strong>
          </Typography>
          <Typography>
            Rating: {product.rating} ({product.reviews} reviews)
          </Typography>
          <Button
            variant="contained"
            className="!bg-blue-500 !text-white mt-4"
            onClick={handleBuyNow} 
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TrimerDetail;
