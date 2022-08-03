import React, { useState } from 'react';
import {Route} from 'react-router-dom'
import './NewForm.css';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Majors from './FormElement/Majors'
import CaseID from './FormElement/CaseID'
import GraudationYear from './FormElement/GraduationYear'
import Name from './FormElement/Name'
import CachedIcon from '@mui/icons-material/Cached';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const AddNewStudent = () => {
    const [enteredCaseID, setEnteredCaseID] = React.useState('');
    const [enteredFirstName, setEnteredFirstName] = React.useState('');
    const [enteredLastName, setEnteredLastName] = React.useState('');
    const [enteredGraduationYear, setEnteredGraduationYear] = React.useState('');
    const [enteredFirstMajor, setEnteredFirstMajor] = React.useState('');
    const [enteredSecondMajor, setEnteredSecondMajor] = React.useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('Student succesfully added!');
    const handleClose = () => {
        setOpen(false);
    };

    const saveFirstNameDataHandler = (enteredFirstName) => {
        setEnteredFirstName(enteredFirstName);
    };

    const saveLastNameDataHandler = (enteredLastName) => {
        setEnteredLastName(enteredLastName);
    };

    const saveCaseIDDataHandler = (enteredCaseID) => {
        setEnteredCaseID(enteredCaseID);
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
        setIsLoading(true)
        const profileInfo = {
            firstname: enteredFirstName,
            lastname: enteredLastName,
            caseID: enteredCaseID,
            graduationYear: enteredGraduationYear,
            firstMajorId: enteredFirstMajor,
            secondMajorId: enteredSecondMajor
        };

        fetch("http://localhost:8080/Profile/addNewStudent", {
            method: 'POST',
            body: JSON.stringify(profileInfo),
            headers: {
                'Content-Type': "application/json"
            },
        }
        ).then((res) => {
            const jsonres = res.json()
            console.log(profileInfo)
            console.log(jsonres)
            setIsLoading(false);
            if (res.ok) { return jsonres; }})
            .then((data) => {
                console.log(data)
                if (data === -1) {
                    setMessage('Oops, failed to add.')
                } else if (data === 1) {
                    setMessage('Successfully added a new student!')
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
            marginTop: '14px',
            marginBottom: '12px',
            borderRadius: '12px',
            fontWeight: 'bold'
        }}>
            Add New Student
        </div>
        <Name onSaveFirstNameData={saveFirstNameDataHandler}
            onSaveLastNameData={saveLastNameDataHandler} />
        <CaseID onSaveCaseIDData={saveCaseIDDataHandler} />
        <GraudationYear onSaveGradYearData={saveGradYearDataHandler} />
        <Majors onSaveMajorData={saveFirstMajorDataHandler} />
        <Majors onSaveMajorData={saveSecondMajorDataHandler} />
       
        <div className="new-form__controls" style={{
            padding: "1.2rem",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {!isLoading && <Button type="submit"
                style={{
                    backgroundColor: '#5A9C78', color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link',
                    maxHeight: '28px'
                }}
                variant='contained' color='inherit' size='small' startIcon={<AddCircleIcon />}
            >
                Add A STUDENT
            </Button>}
            {isLoading && <Button disabled
                style={{
                    backgroundColor: '#A2ACA7', color: '#E2ECF3', fontSize: '13px', fontFamily: 'font-link',
                    maxHeight: '28px'
                }}
                variant='contained' color='inherit' size='small' startIcon={<CachedIcon />}
            >
                Adding student...
            </Button>}

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ width: '30rem', fontSize: '18px', fontFamily: 'font-link'}}>
                        {message}
          </DialogContentText>
                </DialogContent>
                <DialogActions display='center'>
                    <Button onClick={handleClose}  style={{
                        color: '#0a304e', fontSize: '13px', fontFamily: 'font-link',
                        maxHeight: '28px'
                    }} color='inherit' size='small' href='/addStudent'
                    >
                        Ok
                </Button>
                </DialogActions>
            </Dialog>

        </div>
    </form>

};

export default AddNewStudent;

