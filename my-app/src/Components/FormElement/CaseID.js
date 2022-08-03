import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';


const CaseID = (props) => {

    const [caseID, setCaseID] = React.useState('');
    const caseIDChangeHandler =(event) => {
        setCaseID( event.target.value);
        const CaseIDData = event.target.value
        props.onSaveCaseIDData(CaseIDData)
    };

    return(
        <div className="new-form__controls">            
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="standard-basic"
                    inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                    label='Case ID' variant="standard"
                    value= {caseID}
                    InputLabelProps={{ style: { fontSize: 15, fontFamily: 'font-link'} }}
                    onChange={caseIDChangeHandler}
                    required
                />
            </Box>
        </div >

          
    )
}

export default CaseID;