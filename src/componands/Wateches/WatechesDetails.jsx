import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const WatechesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
        id: 1,
        image:
          "https://images.priceoye.pk/ultra-smart-watch-7-in-1-pakistan-priceoye-3ybh3-270x270.webp",
        title: "Ultra Smart Watch With 7 Straps",
        currentPrice: 4549,
        originalPrice: 7399,
        discountPercentage: 39,
        rating: 5.0,
        reviews: 17,
      },
      {
        id: 2,
        image:
          "https://images.priceoye.pk/apple-watch-se-44mm-pakistan-priceoye-0n7w6-270x270.webp",
        title: "Samsung Galaxy Fit 3 With One Year Brand Warranty",
        currentPrice: 4999,
        originalPrice: 7000,
        discountPercentage: 29,
        rating: 4.9,
        reviews: 38,
      },
      {
      id: 3,
      image:
        "https://images.priceoye.pk/hk9-pro-max-plus-smartwatch-pakistan-priceoye-4n0i7-270x270.webp",
      title: "HK9 PRO Max Plus Smartwatch",
      currentPrice: 13499,
      originalPrice: 20000,
      discountPercentage: 33,
      rating: 4.5,
      reviews: 5,
    },
    {
      id: 4,
      image:
        "https://images.priceoye.pk/mibro-watch-lite3-pro-pakistan-priceoye-v5v3v-270x270.webp",
      title: "Mibro Watch Lite 3 Pro",
      currentPrice: 4611,
      originalPrice: 7199,
      discountPercentage: 36,
      rating: 4.7,
      reviews: 30,
    },
    {
      id: 5,
      image:
        "https://images.priceoye.pk/yolo-ultron-smart-watch-pakistan-priceoye-0jv0u-270x270.webp",
      title: "YOLO Ultron Smart Watch",
      currentPrice: 10518,
      originalPrice: 14000,
      discountPercentage: 25,
      rating: 4.6,
      reviews: 13,
    },
    {
      id: 6,
      image:
        "https://images.priceoye.pk/mibro-watch-lite-3-pakistan-priceoye-nq89u-270x270.webp",
      title: "Samsung Galaxy Buds 3 Pro ",
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
      title: "Realme Smart Watch",
      currentPrice: 5499,
      originalPrice: 6000,
      discountPercentage: 8,
      rating: 5.0,
      reviews: 1,
    },
    {
      id: 8,
      image:
        "	https://images.priceoye.pk/huawei-band-9-pakistan-priceoye-9kqv0-270x270.webp",
      title: "HUAWEI Band 9",
      currentPrice: 4999,
      originalPrice: 10500,
      discountPercentage: 52,
      rating: 4.8,
      reviews: 11,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/g-tide-r1-smart-watch-pakistan-priceoye-xlubt-270x270.webp",
      title: "G-TiDE R1 Smart Watch",
      currentPrice: 3811,
      originalPrice: 9990,
      discountPercentage: 62,
      rating: 4.8,
      reviews: 537,
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/xiaomi-redmi-watch-5-active-pakistan-priceoye-n4ewq-270x270.webp",
      title: "Xiaomi Redmi Watch 5 Active",
      currentPrice: 3899,
      originalPrice: 6999,
      discountPercentage: 44,
      rating: 4.6,
      reviews: 14,
    },
    // Add other products here...
  ];

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Typography variant="h4" className="text-center">
        Product Not Found
      </Typography>
    );
  };
  const handleBuyNow = () => {
    navigate("/order-delvry", { state: { product } });
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

export default WatechesDetails;