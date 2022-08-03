import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import '../NewForm.css'

const SignupButton = (prop) => {
    return (
        <div className="new-form__controls" style={{
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Button type="submit" 
                    style={{
                        backgroundColor: '#5A9C78', color: '#E2ECF3', fontSize: '13px',
                        fontFamily: 'font-link', maxHeight: '28px'
                    }}
                    variant='contained' color='inherit' size='small' startIcon={<CreateIcon />}
                >
                    Signup
            </Button>
            </Box>
        </div>
    )
}

export default SignupButton
