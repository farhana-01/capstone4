import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image:
        "https://images.priceoye.pk/redmi-buds-6-active-wireless-earbuds-pakistan-priceoye-h6kkk-270x270.webp",
      title: "Redmi Buds 6 Active Wireless Earbuds",
      currentPrice: 4549,
      originalPrice: 7399,
      discountPercentage: 39,
      rating: 5.0,
      reviews: 17,
    },
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

export default ProductDetail;
