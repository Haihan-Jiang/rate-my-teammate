import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Contributions = (props) => {
    const [contributions, setContributions] = React.useState('');
    const contributionsChangeHandler = (event) => {
        setContributions(event.target.value);
        const contributionsScore = event.target.value
        props.onSaveContributionsScore(contributionsScore)
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
                }}>Contributions</Typography>
            <Rating 
                value={props.dataParentToChild}
                onChange={contributionsChangeHandler}
                style={{
                marginLeft: "47px",
            }} name="half-rating" defaultValue={0.0} precision={0.5} />
        </Box>
    )
}

export default Contributions