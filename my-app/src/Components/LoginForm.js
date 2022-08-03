import React, { useState } from 'react';
import './NewForm.css';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import CaseID from './FormElement/CaseID'
import Password from './FormElement/Password'

const LoginForm = () => {
    const [enteredCaseID, setEnteredCaseID] = React.useState('');
    const [enteredPassword, setPassword] = React.useState('');

    const saveCaseIDDataHandler = (enteredCaseID) => {
        const caseIDData = { enteredCaseID }
        setEnteredCaseID(enteredCaseID);
        console.log(enteredCaseID)
    };

    const savePasswordDataHandler = (enteredPassword) => {
        const passwordData = { enteredPassword }
        setPassword(enteredPassword);
        console.log(passwordData)
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const accountinfo = {
            caseID: enteredCaseID,
            password: enteredPassword
        };
        setEnteredCaseID('')
        setPassword('')
        console.log(accountinfo);
    };

    return (<form onSubmit={submitHandler}>
        <div style={{
            display: "flex",
            fontSize: '22px',
            fontFamily: 'font-link',
            justifyContent: "center",
            padding: "1.0rem",
            color: '#24282B',
            marginTop: '12px',
            marginBottom: '12px',
            borderRadius: '12px',
            fontWeight: 'bold'
        }}>
            Welcome back
        </div>
        <CaseID onSaveCaseIDData={saveCaseIDDataHandler} />
        <Password onSavePasswordData={savePasswordDataHandler} />

        <div className="new-form__controls" style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "0.8rem",
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button type="submit"
                    style={{
                        backgroundColor: '#0a304e',
                        color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link', maxHeight: '28px'
                    }}
                    variant='contained' color='inherit' size='small' startIcon={<LoginIcon />}>
                    Login
                    </Button>
            </Box>
        </div>

        <div
            style={{
                display: "flex",
                fontSize: '14px',
                fontFamily: 'font-link',
                justifyContent: "center",
                alignItems: "center",
                marginTop: "0.8rem",
                color: '#24282B'
            }}>
            Or, don't own a profile?
        </div>
        <a
            style={{
                display: "flex",
                fontSize: '14px',
                fontFamily: 'font-link',
                justifyContent: "center",
                alignItems: "center",
                padding: "1.0rem",
                color: '#24282B',
                textDecorationLine: 'underline',
            }} href='/signup'>
            Create one now!
        </a>
    </form>)


};

export default LoginForm;

