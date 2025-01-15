import React, { useState } from "react";
import { AccountCircle, LocalShipping, ReportProblem, Notifications, ExitToApp } from '@mui/icons-material';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  IconButton,
  Button,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Close,
  Smartphone,
  Watch,
  Headset,
} from "@mui/icons-material";

const categories = [
  {
    name: "Mobiles",
    icon: <Smartphone />,
    subcategories: ["Apple", "Samsung", "Xiaomi", "Infinix", "Oppo", "Vivo", "Realme"],
  },
  {
    name: "Smart Watches",
    icon: <Watch />,
    subcategories: ["Apple Watch", "Samsung Watch", "Xiaomi Mi Band"],
  },
  {
    name: "Wireless Earbuds",
    icon: <Headset />,
    subcategories: ["AirPods", "Galaxy Buds", "Redmi Buds"],
  },
];

const CartList = (props) => {
  const { open, toggleDrawer } = props;
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };
  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    marginBottom: "10px",

  };
  const buttonTexts = [
    'Best Mobiles Under 10000', 'Best Mobiles Under 15000', 'Best Mobiles Under 20000', 'Best Mobiles Under 30000', 'Best Mobiles Under 40000',
    'Best Mobiles Under 50000', 'Best Mobiles Under 60000', 'Best Mobiles Under 70000', 'Best Mobiles Under 80000', 'Best Mobiles Under 90000',
    'Best Mobiles Under 10.0000', ' Best 5g Phones', 'Best Camera Phones', 'Best Selfie Camera Phones ', 'Best Pubg Mobiles',
    'Most Expensive Phones', 'Top 10 Fast Charging Mobiles', '"Best Mobiles Of 2023'
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: { width: 350, backgroundColor: "#f7f7f7", padding: "16px 0" },
      }}
    >

      <Box

        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#4dacf5",
        }}
      ><Typography
        variant="h6"
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
          <div style={{ marginTop: "10px" }}>
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                src="https://static.priceoye.pk/images/logo.svg"
                alt="Logo"
                style={{
                  width: '94px',
                  height: '94px',
                  marginRight: '8px',
                }}
              />
              <IconButton onClick={toggleDrawer(false)} style={{ color: "white" }}>
                <Close />
              </IconButton>
            </a>
            <a href="/account" style={linkStyle}>
              <AccountCircle style={{ marginRight: "8px" }} /> My Account
            </a>
            <a href="/about" style={linkStyle}>
              <LocalShipping style={{ marginRight: "8px" }} /> Track My Order
            </a>
            <a href="/services" style={linkStyle}>
              <ReportProblem style={{ marginRight: "8px" }} /> Launch a Complaint
            </a>
            <a href="/contact" style={linkStyle}>
              <Notifications style={{ marginRight: "8px" }} /> Notifications
            </a>
            <a href="/blog" style={linkStyle}>
              <ExitToApp style={{ marginRight: "8px" }} /> Logout
            </a>
          </div>

        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        style={{
          fontWeight: "bold",
          padding: "8px 16px",
          backgroundColor: "#f0f5ff",
        }}
      >
        CATEGORIES
      </Typography>
      <List>
        {categories.map((category) => (
          <div key={category.name}>
            <ListItem button onClick={() => handleCategoryClick(category.name)}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
              {expandedCategory === category.name ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={expandedCategory === category.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {category.subcategories.map((subcategory) => (
                  <ListItem key={subcategory} sx={{ pl: 4 }}>
                    <ListItemText primary={subcategory} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>

      <Divider />
      <Box sx={{ textAlign: "start" }}>
        {buttonTexts.map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            color="gray-200"
            sx={{
              borderColor: "gray-200",
              color: "gray-200",
              backgroundColor: "transparent",
              margin: "8px",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
                borderColor: "primary.main",
              },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
};

export default CartList;
