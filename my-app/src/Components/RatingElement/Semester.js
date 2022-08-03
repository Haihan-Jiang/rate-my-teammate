import Select from '@mui/material/Select';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Semester = (props) => {
    const [semester, setSemester] = React.useState('');
    const semesterChangeHandler = (event) => {
        setSemester(event.target.value);
        const semesterData = event.target.value
        props.onSaveSemesterData(semesterData)
    };

    return (
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                    <InputLabel id="semester" style={{
                        fontSize: '15px',
                        fontFamily: 'font-link'
                    }}>Semester</InputLabel>
                    <Select
                        labelId="semester"
                        id="semester"
                        value={props.dataParentToChild}
                        onChange={semesterChangeHandler}
                        autoWidth='false'
                        label="semester"
                        required
                        style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>
                        <MenuItem value="" style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>
                            <em>Select...</em>
                        </MenuItem>
                        <MenuItem value={'Fall'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>Fall</MenuItem>
                        <MenuItem value={'Spring'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>Spring</MenuItem>
                        <MenuItem value={'Summer'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>Summer</MenuItem>
                        <MenuItem value={'Winter'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>Winter</MenuItem>
                    </Select>
                </FormControl>
                )
}

export default Semester;