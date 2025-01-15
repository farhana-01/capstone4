import { Box, Typography, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import Logo from '../assits/logo.svg';
import { useSelector } from 'react-redux';

const TrackOder = () => {
    const { items } = useSelector((state) => state.product);
    const [quantities, setQuantities] = useState(
        items.map(item => ({ id: item.id, quantity: 1 }))
    );
    const handleIncrease = (id) => {
        setQuantities(prevQuantities =>
            prevQuantities.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const handleDecrease = (id) => {
        setQuantities(prevQuantities =>
            prevQuantities.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    return (
        <Box className="bg-gray" sx={{ minHeight: '100vh', marginTop: 0 }}>
            <Box className="container">
                <Box className="bg-white py-3 w-100 !shadow-lg">
                    <Typography variant="h6">Order History</Typography>
                </Box>

                <Box className="bg-white w-100 mt-5 h-50 !shadow-lg">
                    <img src={Logo} alt="" style={{ width: '100px', marginBottom: '20px' }} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>Order Details</Typography>

                    {items.map((item, index) => {
                        const itemQuantity = quantities.find(q => q.id === item.id)?.quantity || 1;
                        const itemPrice = item.price || 10.00;
                        const totalPrice = itemPrice * itemQuantity;

                        return (
                            <Box key={index} sx={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={4}>
                                        <img src={item?.image} alt={item.title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{item.title}</Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>${totalPrice.toFixed(2)}</Typography>


                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                            <Button
                                                variant="contained"
                                                onClick={() => handleDecrease(item.id)}
                                                sx={{
                                                    backgroundColor: '#9e9e9e',
                                                    color: '#fff',
                                                    padding: '8px 16px',
                                                    fontSize: '18px',
                                                    '&:hover': { backgroundColor: '#757575' },
                                                    minWidth: '40px',
                                                    borderRadius: '8px',
                                                }}
                                            >
                                                -
                                            </Button>


                                            <Typography sx={{ margin: '0 10px', fontSize: '18px', fontWeight: 'bold' }}>
                                                {itemQuantity}
                                            </Typography>


                                            <Button
                                                variant="contained"
                                                onClick={() => handleIncrease(item.id)}
                                                sx={{
                                                    backgroundColor: '#9e9e9e',
                                                    color: '#fff',
                                                    padding: '8px 16px',
                                                    fontSize: '18px',
                                                    '&:hover': { backgroundColor: '#757575' },
                                                    minWidth: '40px',
                                                    borderRadius: '8px',
                                                }}
                                            >
                                                +
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default TrackOder;
