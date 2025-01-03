import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assits/logo.svg'
import { useSelector } from 'react-redux'


const TrackOder = () => {

    const { items } = useSelector((state) => state.product)

    console.log(items, 'items');


    return (
        <Box className='h-100vh bg-gray'>
            <Box className='container'>
                <Box className='bg-white py-3 w-100 !shadow-lg'>
                    <Typography variant='h6'>Order History</Typography>
                </Box>
                <Box className='bg-white w-100 mt-5 h-50 !shadow-lg'>
                    <img src={Logo} alt="" />
                    <Typography variant='h6'>order</Typography>
                    {items.map((item, index) => (
                        <Box key={index}>
                            <img src={item?.image} alt="" srcset="" />
                            <Typography variant='h6'>{item.title}</Typography>
                        </Box>
                    ))}

                </Box>
            </Box>
        </Box>
    )
}

export default TrackOder
