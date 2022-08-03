import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';


const GraudationYear = (props) => {

    const [gradYear, setGradYear] = React.useState('');
    const gradYearChangeHandler = (event) => {
        setGradYear(event.target.value);
        const gradYearData = event.target.value
        props.onSaveGradYearData(gradYearData)
    };

    return (
        <div className="new-form__controls">            
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SchoolIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="standard-basic"
                value={gradYear}
                inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                label='Graduation Year' variant="standard"
                InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                onChange={gradYearChangeHandler}
                required
            />
        </Box>
        </div >


    )
}

export default GraudationYear;