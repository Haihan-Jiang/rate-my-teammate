import React, { useState } from 'react';
import Year from './Year'
import Semester from './Semester'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const YearSemester = (props) => {
    const [enteredYear, setEnteredYear] = React.useState('');
    const [enteredSemester, setEnteredSemester] = React.useState('');

    const saveYearDataHandler = (enteredYear) => {
        const yearData = { enteredYear }
        setEnteredYear(enteredYear);
        console.log(enteredYear)
    };


    const saveSemesterDataHandler = (enteredSemester) => {
        const semesterData = { enteredSemester }
        setEnteredSemester(enteredSemester);
        console.log(enteredSemester)
    };

    const timeHandler = (event) => {
        const timeData = {
            year: enteredYear,
            semester: enteredSemester
        };
        props.onSaveTimeData(timeData)
        console.log(timeData);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 0.5,
                m: 0.5,
                alignItems: 'flex-end'
            }}
        >
            <Typography noWrap fontFamily="font-link"
                style={{
                    fontSize: '18px',
                    marginRight: "40px",
                    
                }}>When did you cooperate?</Typography>
            <Year onSaveYearData={saveYearDataHandler}/>
            <Semester onSaveSemesterData={saveSemesterDataHandler}/>
        </Box>
    )
}

export default YearSemester