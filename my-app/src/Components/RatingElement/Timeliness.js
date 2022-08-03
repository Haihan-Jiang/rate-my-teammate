import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Timeliness = (props) => {
    const [timeliness, setTimeliness] = React.useState('');
    const timelinessChangeHandler = (event) => {
        setTimeliness(event.target.value);
        const timelinessScore = event.target.value
        props.onSaveTimelinessScore(timelinessScore)
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
                    marginRight: "74px",
                    marginBottom: "18px"
                }}>Timeliness</Typography>
            <Rating 
                value={props.dataParentToChild}
                onChange={timelinessChangeHandler}
                style={{
                marginLeft: "68px",
            }} name="half-rating" defaultValue={0.0} precision={0.5} />
        </Box>
    )
}

export default Timeliness