import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PositiveTagGroup from './PositiveTagGroup'
import NegativeTagGroup from './NegativeTagGroup'

const TagSelection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 0.5,
                m: 0.5,
            }}
        >
            <Typography noWrap fontFamily="font-link"
                style={{
                    fontSize: '18px',
                    marginRight: "40px",
                    marginTop: "18px"
                }}>Select the tags best describe your teammate. Please be honest :)</Typography>
            <PositiveTagGroup />
            <NegativeTagGroup />
        </Box>
    )
}

export default TagSelection