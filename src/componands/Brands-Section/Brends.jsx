import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

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
    <Container sx={{ padding: "20px 0", marginTop: "40px" }}>
      {/* Header Section */}
      <Box
        sx={{
          maxWidth: "100%",
          padding: { xs: "0 10px", sm: "0 20px", md: "0 40px" },
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Shop by Brand
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#e0e0e0", color: "#555" },
            }}
          >
            View All
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between", 
          gap: "20px",
          padding: "0 20px", 
        }}
      >
        {brandImages.map((brand, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              flex: "1 1 calc(10% - 20px)", 
              maxWidth: "10%", 
              minWidth: "80px", 
            }}
          >
            <Box
              component="img"
              src={brand.src}
              alt={`Brand ${brand.name}`}
              sx={{
                width: "100%", 
                height: "auto",
              }}
            />
            <Typography
              variant="body2"
              sx={{ marginTop: "8px", fontSize: "14px" }}
            >
              {brand.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default BrandSection;
