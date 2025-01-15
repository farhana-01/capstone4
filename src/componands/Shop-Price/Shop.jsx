import React, { useState } from "react";
import { Grid, Button, Typography, Container } from "@mui/material";

function ShopPrice() {
  const priceRanges = [
    "Below Rs. 15,000",
    "Rs. 15,000 - Rs. 25,000",
    "Rs. 25,000 - Rs. 40,000",
    "Rs. 40,000 - Rs. 60,000",
    "Rs. 60,000 - Rs. 80,000",
    "Rs. 80,000 - Rs. 100,000",
    "Rs. 100,000 - Rs. 150,000",
    "Above 150,000",
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container
      style={{
        backgroundColor: "#e5e7eb",
        padding: "20px 20px 0 20px", 
        marginTop: "300px", 
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            marginTop: "50px", 
          }}
        >
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Shop by Price
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
          >
            View All
          </Button>
        </div>
        <Grid container spacing={2}>
          {priceRanges.map((range, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor:
                    activeIndex === index ? "#1976d2" : "#ffeb3b",
                  color: "#000", 
                  position: "relative",
                  overflow: "hidden",
                  textTransform: "none",
                  padding: "10px",
                  fontWeight: "bold",
                  zIndex: 1, 
                  transition: "transform 0.3s ease-in-out, background-color 0.3s ease", 
                  "&:hover": {
                    backgroundColor: "#1976d2", 
                    color: "#fff", 
                    transform: "translateY(-10px)", 
                  },
                  "&:active": {
                    transform: "translateY(-10px)", 
                  },
                }}
                onClick={() => handleClick(index)} 
              >
                {range}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default ShopPrice;
