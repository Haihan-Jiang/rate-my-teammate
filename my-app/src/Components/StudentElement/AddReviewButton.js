import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import '../NewForm.css'
import {useHistory} from "react-router-dom";

const AddReviewButton = (prop) => {
    const history = useHistory();
    const page_id = history.location.state;
    console.log(page_id)

    const clickHandler = (event) => {
        history.push({
            pathname: "/review",
            state: page_id
        })
    };

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
                        onClick={clickHandler}>
                    Add New Review
                </Button>
            </Box>
        </div>
    )
}

export default AddReviewButton