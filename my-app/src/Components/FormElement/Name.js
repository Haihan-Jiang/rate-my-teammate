import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FaceIcon from '@mui/icons-material/Face';
import Box from '@mui/material/Box';


const Name = (props) => {

    const [firstName, setEnteredFirstName] = React.useState('');
    const [lastName, setEnteredLastName] = React.useState('');

    const firstNameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
        const firstNameData = event.target.value
        props.onSaveFirstNameData(firstNameData)
    };

    const lastNameChangeHandler = (event) => {
        setEnteredLastName(event.target.value);
        const lastNameData = event.target.value
        props.onSaveLastNameData(lastNameData)
    };

    return (
        <div className="new-form__controls">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField
                    id="standard-basic"
                    value={firstName}
                    inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    label='First Name' variant="standard"
                    InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    onChange={firstNameChangeHandler}
                    required
                />
                <TextField
                    id="standard-basic"
                    value={lastName}
                    inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    label='Last Name' variant="standard"
                    InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    onChange={lastNameChangeHandler}
                    required
                />
            </Box>
        </div >
    )
}

export default Name;