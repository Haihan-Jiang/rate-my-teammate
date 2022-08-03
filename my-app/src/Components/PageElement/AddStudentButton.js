import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import '../NewForm.css'

const AddStudentButton = (prop) => {
    return (
        <div className="new-form__controls" style={{
            padding: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Button type="submit"
                        style={{
                            backgroundColor: '#9BADBB', color: 'white', fontSize: '13px',
                            fontFamily: 'font-link', maxHeight: '28px'
                        }}
                        variant='contained' color='inherit' size='small'
                href='\addStudent'>
                    Add New Student
                </Button>
            </Box>
        </div>
    )
}

export default AddStudentButton