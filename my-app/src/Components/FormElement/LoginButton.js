import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import '../NewForm.css'



const LoginButton = (prop) => {
    return (
        <div className="new-form__controls" style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "0.8rem",
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                    style={{ backgroundColor: '#0a304e', 
                        color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link', maxHeight: '28px'}}
                    variant='contained' color='inherit' size='small' startIcon={<LoginIcon />}>
                    Login
                    </Button>
            </Box>
        </div>
    )
}

export default LoginButton
