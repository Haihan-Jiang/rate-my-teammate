import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Respectful = (props) => {
    const [repectful, setRespectful] = React.useState('');
    const respectfulChangeHandler = (event) => {
        setRespectful(event.target.value);
        const respectfulScore = event.target.value
        props.onSaveRespectfulScore(respectfulScore)
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
                    marginRight: "85px",
                    marginBottom: "18px"
                }}>Respectful</Typography>
            <Rating 
                value={props.dataParentToChild}
                onChange={respectfulChangeHandler}

            style={{
                marginLeft: "58.8px",
            }} name="half-rating" defaultValue={0.0} precision={0.5} />
        </Box>
    )
}

export default Respectful