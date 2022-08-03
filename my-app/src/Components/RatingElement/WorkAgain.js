import * as React from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const WorkAgain = (props) => {
    const [work, setWork] = React.useState('');
    const workChangeHandler = (event) => {
        setWork(event.target.value);
        const workData = event.target.value
        props.onSaveWorkData(workData)
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
                    marginRight: "58px",

                }}>Willing to work again?</Typography>
                
        <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <InputLabel id="answer" style={{
            fontSize: '15px',
            fontFamily: 'font-link'
        }}>Answer</InputLabel>
        <Select
            labelId="work"
            id="work"
            value={props.dataParentToChild}
            onChange={workChangeHandler}
            autoWidth='false'
            label="work"
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
            <MenuItem value={0} style={{
                fontSize: '15px',
                fontFamily: 'font-link'
            }}>Please no...</MenuItem>
            <MenuItem value={1} style={{
                fontSize: '15px',
                fontFamily: 'font-link'
            }}>Of course!</MenuItem>
        </Select>
    </FormControl>
    </Box>
    )
    
}

export default WorkAgain;