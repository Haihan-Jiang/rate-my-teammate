import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AuthContext from '../../auth-store/auth-context'
const LogoutButton = () => {
    const authCtx =React.useContext(AuthContext);
    const logoutHandler = () => {
        authCtx.logout();
    };
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
            <Button href='/main'
                style={{color: 'white', fontSize: '14px', fontWeight: 'bold',
                    float: 'right', fontFamily: 'font-link', maxHeight: '28px'}}
                color='inherit' size='small' onClick={logoutHandler}>
                Log out
            </Button>
        </Box>
    )
}

export default LogoutButton