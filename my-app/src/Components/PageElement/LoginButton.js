import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const LoginButton = (prop) => {
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
            <Button href='/auth'
                style={{color: 'white', fontSize: '14px', fontWeight: 'bold',
                    float: 'right', fontFamily: 'font-link', maxHeight: '28px'}}
                color='inherit' size='small'>
                Log in
            </Button>
        </Box>
    )
}

export default LoginButton