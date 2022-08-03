import Select from '@mui/material/Select';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const Grade = (props) => {
    const [grade, setGrade] = React.useState('');

    const gradeChangeHandler  = (event) => {
        setGrade(event.target.value);
        const gradeData = event.target.value
        props.onSaveGradeData(gradeData)
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
                    marginRight: "105px",
                    marginTop: '20px'
                }}>Grade (optional)</Typography>
                <FormControl variant="standard" sx={{ minWidth: 80 }}>
                    <InputLabel id="year" style={{
                        fontSize: '15px',
                        fontFamily: 'font-link'
                    }}>Grade</InputLabel>
                    <Select
                        labelId="grade"
                        id="grade"
                    value={props.dataParentToChild}
                        onChange={gradeChangeHandler}
                        autoWidth='false'
                        label="grade"
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
                        <MenuItem value={'A'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>A</MenuItem>
                        <MenuItem value={'B'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>B</MenuItem>
                        <MenuItem value={'C'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>C</MenuItem>
                        <MenuItem value={'D'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>D</MenuItem>
                        <MenuItem value={'F'} style={{
                            fontSize: '15px',
                            fontFamily: 'font-link'
                        }}>F</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            )
        }

export default Grade;