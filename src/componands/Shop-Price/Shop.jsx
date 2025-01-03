import React from "react";
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

  return (
    <Container
      style={{
        backgroundColor: "#e5e7eb", // Light gray background
        padding: "20px 20px 0 20px", // Top and horizontal padding only, no bottom padding
        marginTop: "100px", // Adjusted margin for top space
      }}
    >
      {/* Header Section */}
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
            marginTop: "200px",
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

        {/* Grid Section for Price Ranges */}
        <Grid container spacing={2}>
          {priceRanges.map((range, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ffeb3b",
                  color: "#000", // Text starts as black
                  position: "relative",
                  overflow: "hidden",
                  textTransform: "none",
                  padding: "10px",
                  fontWeight: "bold",
                  zIndex: 1, // Text stays above the pseudo-element
                  transition: "background-color 0.3s ease-in-out", // Smooth transition for background color
                  "&:hover": {
                    backgroundColor: "#87CEEB", // Sky blue on hover
                    color: "#fff", // Change text color to white on hover
                  },
                }}
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
