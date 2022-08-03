import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AuthContext from '../../auth-store/auth-context';
import LogoutButton from './LogoutButton';

const SignupButton = () => {
    const authCtx = React.useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
            {!isLoggedIn && <Button href='/auth'
                style={{
                    color: 'white', fontSize: '14px', fontWeight: 'bold',
                    float: 'right', fontFamily: 'font-link', maxHeight: '28px'
                }}
                color='inherit' size='small' href='/auth'>
                    Signup or Login
            </Button>}
            {isLoggedIn && <LogoutButton/>}
        </Box>
    )
}

export default SignupButton