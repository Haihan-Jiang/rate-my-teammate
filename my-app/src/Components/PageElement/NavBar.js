import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import RateIcon from "./RateIcon"
import AuthContext from '../../auth-store/auth-context';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

export default function NavBar() {
    const authCtx = React.useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <RateIcon/>
                    {!isLoggedIn && ( <div style={{position: 'absolute', right: 25}}>
                        <SignupButton/>
                    </div>)}
                    {isLoggedIn && (<div style={{ position: 'absolute', right: 25 }}>
                        <LogoutButton />
                    </div>)}
                   
                </Toolbar>
            </AppBar>
        </Box>
    );
}
