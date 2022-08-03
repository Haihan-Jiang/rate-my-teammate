import Select from '@mui/material/Select';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


const Year = (props) => {
    const [year, setYear] = React.useState( '');
    const yearChangeHandler = (event) => {
        setYear(event.target.value);
        const yearData = event.target.value
        props.onSaveYearData(yearData)
    };


    return (
                    <FormControl variant="standard" sx={{  minWidth: 100 }}>
                    <InputLabel id="year" style={{
                        fontSize: '15px',
                        fontFamily: 'font-link'
                    }}>Year</InputLabel>
                    <Select
                        labelId="year"
                        id="year"
                        value={props.dataParentToChild}
                        onChange={yearChangeHandler}
                        autoWidth='false'
                        label="year"
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
                        <MenuItem value={2023} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2023</MenuItem>
                        <MenuItem value={2022} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2022</MenuItem>
                        <MenuItem value={2021} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2021</MenuItem>
                        <MenuItem value={2020} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2020</MenuItem>
                        <MenuItem value={2019} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2019</MenuItem>
                        <MenuItem value={2018} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>2018</MenuItem>
                    </Select>
                </FormControl>
            )
}

export default Year;