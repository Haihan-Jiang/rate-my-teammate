import Select from '@mui/material/Select';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Box from '@mui/material/Box';

const Majors = (props) => {
    const [major, setMajor] = React.useState('');
    const [majorsData, setMajorsData] = React.useState(null);
    const majorChangeHandler = (event) => {
        setMajor(event.target.value);
        const majorData = event.target.value
        props.onSaveMajorData(majorData)
    };

    React.useEffect(() => {
        fetch("http://localhost:8080/Majors/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMajorsData(data)
            })
    }, [])

    return (
        <div className="new-form__controls">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <MenuBookIcon sx={{ color: 'action.active', mr: 0.3, my: 1.4 }} />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 202 }}>
                    <InputLabel id="major" style={{
                        fontSize: '15px',
                        fontFamily: 'font-link'
                    }}>Major</InputLabel>
                    <Select
                        labelId="major"
                        id="first-major"
                        value={major}
                        onChange={majorChangeHandler}
                        autoWidth='false'
                        label="First Major"
                        style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}
                    >
                        <MenuItem value="" style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>
                            <em>None</em>
                        </MenuItem>
                        {majorsData && majorsData.map((majorsData) => (
                            <MenuItem
                                key={majorsData.id}
                                value={majorsData.id}
                                style={{
                                    fontSize: '15px',
                                    fontFamily: 'font-link'
                                }}
                            >{majorsData.major}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </div>)
}

export default Majors;