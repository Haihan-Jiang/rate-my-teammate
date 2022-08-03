import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../NewForm.css'



const CorrectButton = (prop) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 0.5,
                m: 0.5,
            }}
        >
            <Button
                style={{
                    backgroundColor: '#0a304e',
                    marginTop: '40px',
                    marginLeft: '260px',
                    color: '#E2ECF3', fontSize: '15px', fontFamily: 'font-link', maxHeight: '36px'
                }}
                variant='contained' color='inherit' size='small' startIcon={<CheckCircleOutlineIcon />}>
                Submit
                    </Button>
        </Box>
    )
}

export default CorrectButton
