import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';



const Password = (props) => {

    const [password, setPassword] = React.useState('');
    const showPassword = false
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
        const passwordData = event.target.value
        props.onSavePasswordData(passwordData)
    };

    return(
        <div className="new-form__controls">           
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <VisibilityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                id="standard-basic" label='Password'
                variant="standard"
                    inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={passwordChangeHandler}
                required
                endAdornment={
                <InputAdornment position="end"/>}
            />
        </Box>
        </div >
          
    )
}

export default Password;