import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const MobileDetaile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
        id: 1,
        image:
          "	https://images.priceoye.pk/xiaomi-poco-c75-pakistan-priceoye-aowis-270x270.webp",
        title: "Xiaomi Poco C75",
        currentPrice: 4549,
        originalPrice: 7399,
        discountPercentage: 39,
        rating: 5.0,
        reviews: 17,
      },
      {
        id: 2,
        image:
          "	https://images.priceoye.pk/realme-13-plus-5g-pakistan-priceoye-78si6-270x270.webp",
        title: "Realme 13+ 5G",
        currentPrice: 4999,
        originalPrice: 7000,
        discountPercentage: 29,
        rating: 4.9,
        reviews: 38,
      },
      {
      id: 3,
      image:
        "https://images.priceoye.pk/tecno-spark-30-pakistan-priceoye-rcs5e-270x270.webp",
      title: "Samsung Galaxy Z Fold 6",
      currentPrice: 13499,
      originalPrice: 20000,
      discountPercentage: 33,
      rating: 4.5,
      reviews: 5,
    },
    {
      id: 4,
      image:
        "https://images.priceoye.pk/samsung-galaxy-z-fold-6-pakistan-priceoye-6jsny-270x270.webp",
      title: "Vivo V40e",
      currentPrice: 4611,
      originalPrice: 7199,
      discountPercentage: 36,
      rating: 4.7,
      reviews: 30,
    },
    {
      id: 5,
      image:
        "https://images.priceoye.pk/xiaomi-redmi-a3-pakistan-priceoye-z5m8c-270x270.webp",
      title: "Itel S24",
      currentPrice: 10518,
      originalPrice: 14000,
      discountPercentage: 25,
      rating: 4.6,
      reviews: 13,
    },
    {
      id: 6,
      image:
        "https://images.priceoye.pk/realme-c61-pakistan-priceoye-v5h3g-270x270.webp",
      title: "Xiaomi Redmi A3",
      currentPrice: 49799,
      originalPrice: 69999,
      discountPercentage: 29,
      rating: 4.7,
      reviews: 7,
    },
  
    {
      id: 7,
      image:
        "https://images.priceoye.pk/oppo-a3-pakistan-priceoye-hn4ho-270x270.webp",
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
        "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-d66z3-270x270.webp",
      title: "Realme C61",
      currentPrice: 4999,
      originalPrice: 10500,
      discountPercentage: 52,
      rating: 4.8,
      reviews: 11,
    },
    {
      id: 9,
      image:
        "https://images.priceoye.pk/apple-iphone-16-pro-pakistan-priceoye-u4pw9-270x270.webp",
      title: "Samsung Galaxy A55 5G",
      currentPrice: 3811,
      originalPrice: 9990,
      discountPercentage: 62,
      rating: 4.8,
      reviews: 537,
    },
    {
      id: 10,
      image:
        "https://images.priceoye.pk/apple-iphone-16-pro-max-pakistan-priceoye-v0q3c-270x270.webp",
      title: "Oppo A3",
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

export default MobileDetaile;
