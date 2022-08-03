import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Course = (props) => {

    const [course, setCourse] = React.useState('');
    const courseChangeHandler = (event) => {
        setCourse(event.target.value);
        const courseData = event.target.value
        props.onSaveCourseData(courseData)
    };


    return (
         <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    p: 0.5,
                    m: 0.5,
                }}
            >
                <Typography noWrap fontFamily="font-link" 
                style={{
                    fontSize: '18px',
                    marginRight: "175px",
                    marginTop: "20px"
                }}>Course</Typography>
            <TextField id="standard-basic"
                value={props.dataParentToChild}
                inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                label='ex.CSDS132' variant="standard"
                InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                onChange={courseChangeHandler} required
            />
            </Box>

    
               
    )
}

export default Course;