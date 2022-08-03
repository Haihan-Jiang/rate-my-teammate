import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PublishIcon from '@mui/icons-material/Publish';
import '../NewForm.css'



const SubmitButton = (prop) => {
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
                        marginLeft: '240px',
                        color: '#E2ECF3', fontSize: '15px', fontFamily: 'font-link', maxHeight: '36px'
                    }}
                variant='contained' color='inherit' size='small' startIcon={<PublishIcon />}>
                    Publish
                    </Button>
            </Box>
    )
}

export default SubmitButton
