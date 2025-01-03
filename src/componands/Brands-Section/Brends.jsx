import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

function BrandSection() {
  const brandImages = [
    { src: "https://static.priceoye.pk/images/brands/svg/samsung.svg", name: "Samsung" },
    { src: "https://static.priceoye.pk/images/brands/svg/infinix.svg", name: "Infinix" },
    { src: "https://static.priceoye.pk/images/brands/svg/oppo.svg", name: "Oppo" },
    { src: "https://static.priceoye.pk/images/brands/svg/xiaomi.svg", name: "Xiaomi" },
    { src: "https://static.priceoye.pk/images/brands/svg/vivo.svg", name: "Vivo" },
    { src: "https://static.priceoye.pk/images/brands/svg/tecno.svg", name: "Tecno" },
    { src: "https://static.priceoye.pk/images/brands/svg/realme.svg", name: "Realme" },
    { src: "https://static.priceoye.pk/images/brands/svg/itel.svg", name: "Itel" },
    { src: "https://static.priceoye.pk/images/brands/svg/apple.svg", name: "Apple" },
    { src: "https://static.priceoye.pk/images/brands/svg/nokia.svg", name: "Nokia" },
  ];

  return (
    <Box className="bg-gray-200" sx={{ padding: "20px 0", marginTop: "40px" }}>
      <Container>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Shop by Brand
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View All
          </Button>
        </Box>

        {/* Brand Logos Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflowX: "auto", // Enables horizontal scrolling if needed
            whiteSpace: "nowrap", // Ensures items stay on one line
            gap: "10px",
          }}
        >
          {brandImages.map((brand, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center", // Centers the text under each image
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={brand.src}
                alt={`Brand ${brand.name}`}
                sx={{
                  width: "60px", // Adjust width of each image
                  height: "auto",
                  flexShrink: 0, // Prevents images from shrinking
                }}
              />
              <Typography variant="body2" sx={{ marginTop: "8px", fontSize: "14px" }}>
                {brand.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default BrandSection;
