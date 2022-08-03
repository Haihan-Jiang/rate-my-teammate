import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Comment = (props) => {
    const [comments, setComments] = React.useState('');
    const commentsChangeHandler = (event) => {
        setComments(event.target.value);
        const commentsData = event.target.value
        props.onSaveCommentsData(commentsData)
    };

    return (
        <Box
            sx={{
                display: 'flex',
                p: 0.5,
                m: 0.5,
                flexDirection: 'column',

            }}
        >
            <Typography noWrap fontFamily="font-link"
                style={{
                    fontSize: '18px',
                    marginTop: "15px",
                }}>Any comments? (optional)</Typography>
            <TextField
                style={{
                    marginTop: "5px",
                }}
                value={props.dataParentToChild}
                onChange={commentsChangeHandler}
                inputProps={{ style: { fontSize: 15, fontFamily: 'font-link' } }}
                id="standard-multiline-static"
                multiline
                rows={4}
                defaultValue="Say something! (200 charaters)"
                variant="standard"
            />
            </Box>
    )
}

export default Comment