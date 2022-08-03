import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const EaseOfContact = (props) =>{
    const [eoc, setEOC] = React.useState('');

    const eocChangeHandler = (event) => {
        setEOC(event.target.value);
        const eocScore = event.target.value
        props.onSaveEaseOfContractScore(eocScore)
    };

    return(
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
                    marginRight: "64px",
                    marginBottom: "18px"
                }}>Ease of Contact</Typography>
            <Rating style={{
                marginLeft: "40px",
            }} 
                value={props.dataParentToChild}
                onChange={eocChangeHandler}
                name="half-rating" defaultValue={0.0} precision={0.5}/>
            </Box>
        )
}

export default EaseOfContact