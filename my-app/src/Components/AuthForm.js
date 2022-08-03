
import React, { useState, useContext } from 'react';
import './NewForm.css';
import Password from './FormElement/Password'
import CaseID from './FormElement/CaseID'
import GraudationYear from './FormElement/GraduationYear'
import Name from './FormElement/Name'
import Majors from './FormElement/Majors'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import LoginIcon from '@mui/icons-material/Login';
import CachedIcon from '@mui/icons-material/Cached';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AuthContext from '../auth-store/auth-context';

const AuthForm = () => {
    const [enteredCaseID, setEnteredCaseID] = useState('');
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredGraduationYear, setEnteredGraduationYear] = useState('');
    const [enteredPassword, setPassword] = useState('');
    const [enteredFirstMajor, setEnteredFirstMajor] = useState('');
    const [enteredSecondMajor, setEnteredSecondMajor] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [succeed, setSucceed] = useState(false);
    const [message, setMessage] = useState('Something wrong!');

    const authCtx = useContext(AuthContext)
    const handleClose = () => {
        setOpen(false);
    };

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const saveFirstNameDataHandler = (enteredFirstName) => {
        const firstNameData = { enteredFirstName }
        setEnteredFirstName(enteredFirstName);
    };

    const saveLastNameDataHandler = (enteredLastName) => {
        setEnteredLastName(enteredLastName);
    };

    const saveCaseIDDataHandler = (enteredCaseID) => {
        setEnteredCaseID(enteredCaseID);
    };

    const savePasswordDataHandler = (enteredPassword) => {
        setPassword(enteredPassword);
    };

    const saveGradYearDataHandler = (enteredGraduationYear) => {
        setEnteredGraduationYear(enteredGraduationYear);
    };
    
    const saveFirstMajorDataHandler = (enteredFirstMajor) => {
        setEnteredFirstMajor(enteredFirstMajor);
    };

    const saveSecondMajorDataHandler = (enteredSecondMajor) => {
        setEnteredSecondMajor(enteredSecondMajor);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);
        let accountinfo;
        let url;
        if (isLogin){
            url = "http://localhost:8080/Account/login"
            accountinfo = {
                caseId: enteredCaseID,
                password: enteredPassword
            };
        }
        else{
            url = "http://localhost:8080/Account/signup"
            accountinfo = {
                caseId: enteredCaseID,
                password: enteredPassword,
                firstname: enteredFirstName,
                lastname: enteredLastName,
                firstMajorId: enteredFirstMajor,
                secondMajorId: enteredSecondMajor,
                graduationYear: enteredGraduationYear,
            };
            };
        fetch(url, {
                method: 'POST',
                body: JSON.stringify(accountinfo),
                headers: {
                    'Content-Type': "application/json"
                },
            }
        ).then((res) => {
            const jsonres = res.json()
            console.log(accountinfo)
            console.log(jsonres)
            setIsLoading(false);
            if (res.ok) {return jsonres;}
                }
                )
            .then((data) => {
                const temp_data = parseInt(data[0])
                console.log(temp_data)
                if (temp_data === -1){
                    setSucceed(false)
                    setMessage('Authentication failed!')
                }else{
                    const expirationTime = new Date(
                        new Date().getTime() + +'3600' * 1000
                    );
                    setSucceed(true)
                    setMessage('Authentication succeeded!')
                    authCtx.login(temp_data, expirationTime.toISOString());
                }
                setOpen(true)
                })
            };


    return <form onSubmit = {submitHandler}>
        <div style={{
            display: "flex",
            fontSize: '24px',
            fontFamily: 'font-link',
            justifyContent: "center",
            padding: "1.0rem",
            color: '#24282B',
            marginTop: '22px',
            marginBottom: '20px',
            borderRadius: '12px',
            fontWeight: 'bold'
        }}>
            {isLogin ? 'Welcome back' : 'Welcome to Rate My Teammate'}
        </div>
        {!isLogin ? <Name onSaveFirstNameData={saveFirstNameDataHandler}
            onSaveLastNameData={saveLastNameDataHandler} /> : ''}
        <CaseID onSaveCaseIDData={saveCaseIDDataHandler} />
        <Password onSavePasswordData={savePasswordDataHandler} />
        {!isLogin ? <GraudationYear onSaveGradYearData={saveGradYearDataHandler} />: ''}
        {!isLogin ? <Majors onSaveMajorData={saveFirstMajorDataHandler} /> : ''}
        {!isLogin ? <Majors onSaveMajorData={saveSecondMajorDataHandler} />: ''}
        <div className="new-form__controls" style={{
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
        }}>
            
            {!isLoading && 
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                {isLogin ? <Button type="submit"
                    style={{
                        backgroundColor: '#0a304e',
                        color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link', maxHeight: '28px'
                    }}
                    variant='contained' color='inherit' size='small' startIcon={<LoginIcon />}>
                    Login
                    </Button>

                    : <Button type="submit"
                        style={{
                            backgroundColor: '#5A9C78', color: '#E2ECF3', fontSize: '13px',
                            fontFamily: 'font-link', maxHeight: '28px'
                        }}
                        variant='contained' color='inherit' size='small' startIcon={<CreateIcon />}
                    >
                        Signup
                </Button>}
            </Box>}
            {isLoading && <Button disabled
                style={{
                    backgroundColor: '#A2ACA7',
                    color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link', maxHeight: '28px'
                }}
                variant='contained' color='inherit' size='small' startIcon={<CachedIcon />}>
                Loading...
            </Button>}
               
        </div>
        <div className="new-form__controls" style={{
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Button onClick={switchAuthModeHandler}
            style={{
                display: "flex",
                fontSize: '14px',
                fontFamily: 'font-link',
                textDecoration:'underline',
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.0rem",
                color: '#24282B',
            }}>
            {isLogin ? ' Or, don\'t have an account?' : ' Or, already had a profile?'}
           
        </Button>
        </div>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{ width: '30rem', fontSize: '18px', fontFamily: 'font-link' }}>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions display='center'>
                {!succeed &&
                    <Button onClick={handleClose} style={{
                        color: '#0a304e', fontSize: '13px', fontFamily: 'font-link',
                        maxHeight: '28px'
                    }} color='inherit' size='small' href='/auth'
                    >
                        Ok
            </Button> }

                {succeed &&
                    <Button onClick={handleClose} style={{
                        color: '#0a304e', fontSize: '13px', fontFamily: 'font-link',
                        maxHeight: '28px'
                    }} color='inherit' size='small' href='/main'
                    >
                        Ok
            </Button>}
            </DialogActions>
        </Dialog>
    </form>

};

export default AuthForm;

