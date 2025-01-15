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
        padding: { xs: "10px", sm: "20px", md: "30px" },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          textAlign: { xs: "center", sm: "left" },
          fontSize: { xs: "18px", sm: "20px" },
        }}
      >
        Reason to Buy
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
          },
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "35px", 
              backgroundColor: "#0073e6",
              borderRadius: "10px",
              padding: "15px",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "140px", 
                height: "140px", 
                flexShrink: 0,
                objectFit: "contain",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "18px" },
                  marginBottom: "5px", 
                }}
              >
                {item.title}
              </Typography>
              {item.description && (
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                  }}
                >
                  {item.description}
                </Typography>
              )}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9900",
                  alignSelf: "start",
                  fontSize: { xs: "12px", sm: "14px" },
                  padding: "8px 16px",
                  textTransform: "none",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  marginTop: "10px", 
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
