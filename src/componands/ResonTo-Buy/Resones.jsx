import React from "react";
import { Box, Typography, Button } from "@mui/material";

function ReasonToBuySection() {
  const items = [
    {
      title: "Priceoye Extended Warranty",
      description: "1 YEAR Extended Warranty",
      buttonText: "Know More",
      image: "https://static.priceoye.pk/images/home/extended-warranty.svg",
    },
    {
      title: "Packaging Video",
      description: "",
      buttonText: "Know More",
      image: "https://static.priceoye.pk/images/home/order-packaging.svg",
    },
    {
      title: "Open Parcel (ISB - LHR - KHI)",
      description: "",
      buttonText: "Know More",
      image: "https://static.priceoye.pk/images/home/feature-shipping.svg",
    },
    {
      title: "Easy Installments",
      description: "",
      buttonText: "Know More",
      image: "https://static.priceoye.pk/images/home/easy_instalment.svg",
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "15px", textAlign: "left" }}>
        Reason to Buy
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              backgroundColor: "#0073e6",
              borderRadius: "8px",
              padding: "15px",
              color: "#fff",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              width: {
                xs: "100%", // Full width on extra small screens
                sm: "48%", // Half width on small screens
                md: "31%", // One-third width on medium screens
              },
              minWidth: "450px",
            }}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100px",
                height: "100px",
                flexShrink: 0,
              }}
            />
            {/* Text Content */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                flex: 1,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: "5px", fontSize: "12px" }}
              >
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9900",
                  alignSelf: "start",
                  fontSize: "12px",
                  padding: "5px 10px",
                }}
              >
                {item.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ReasonToBuySection;
