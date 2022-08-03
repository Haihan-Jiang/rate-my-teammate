import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = (props) => {
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end'}} onClick={props.onClick}>
            <Button
                style={{color: 'white',
                    float: 'right', 
                    marginLeft: '601%',
                    marginTop:'5%'}}
                    color='inherit' size='large' startIcon={<SearchIcon/>}>
                Search
            </Button>
        </Box>
    )
}

export default SearchButton