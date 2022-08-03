import * as React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import './NewForm.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Profile from './StudentElement/Profile'
import RatingInfo from './StudentElement/RatingInfo'
import Comment from './StudentElement/Comment'
import AddReviewButton from './StudentElement/AddReviewButton';
import AuthContext from '../auth-store/auth-context';
import NavBar from "./PageElement/NavBar"

const StudentPage = () => {
    const authCtx = React.useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
            height: "100%",
            width:'100%'
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <NavBar />
                <Grid container spacing={2} style={{
                    display: 'flex', jusityContent: 'center',
                     padding: '2.5rem 0rem 1rem 13.5rem'}}>
                    <Grid elevation={0} item xs={5}>
                        <Profile />
                    </Grid>
                    <Grid elevation={0} item xs={4.5}>
                        <RatingInfo />
                    </Grid>
                </Grid>
                <Comment />
                {isLoggedIn ? <AddReviewButton /> : ''}
                </Box>
        </div>)
};

export default StudentPage