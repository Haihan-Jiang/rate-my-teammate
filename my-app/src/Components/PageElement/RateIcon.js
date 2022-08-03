import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const RateIcon = (prop) => {
    return (
        <Box sx={{ alignItems: 'center', position:'static' }}>
            <Button
                style={{backgroundColor: 'white', color: '#9BADBB', fontSize: '24px',
                        fontFamily: 'font-link', maxHeight: '32px', fontWeight: 'bold', borderRadius: '6px'}}
                color='inherit' size='big' href='/main'>
                Rate My Teammate
            </Button>
        </Box>
    )
}

export default RateIcon