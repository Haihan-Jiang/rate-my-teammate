import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import RateIcon from "./RateIcon"
import LogoutButton from "./LogoutButton";

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="transparent" elevation={0}>
                <Toolbar>
                    <RateIcon/>
                    <div style={{position: 'absolute', right: 25}}>
                        <LogoutButton/>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
