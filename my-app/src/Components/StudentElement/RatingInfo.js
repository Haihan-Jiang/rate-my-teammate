import Box from '@mui/material/Box';
import React, {useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import {useHistory} from "react-router-dom";

const RatingInfo = () => {
    const history = useHistory();
    const page_id = history.location.state
    const [profile, setProfile] = React.useState(null)

    const url = "http://localhost:8080/Profile/get?PAGE_ID=" + page_id

    useEffect(()=>{
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data)=> {
                console.log(data)
                setProfile(data);
            })
            .catch((error) => {
                console.log('error: ' + error);
            })
    },[])

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        backgroundColor: 'transparent',
        boxShadow:'none',
        padding: theme.spacing(1),
        textAlign: 'start',
        color: 'white',
    }));

    return (
        // <div style={{
        //     backgroundSize: "cover",
        //     borderRadius:'10px',
        //     backgroundImage: `linear-gradient(180deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
        //     height: "40vh",
        // }}>
        <div>
            {profile &&
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{
                display: 'flex', jusityContent: 'center', marginTop: '3%',
                marginRight: '3%', marginLeft: '3%'
            }} >
                <Grid item xs={10} />
                <Grid elevation={0} item xs={3}>
                    <Typography style={{
                        fontWeight: "bold",
                        fontSize: '36px',
                        fontFamily: 'font-link',
                        color:'white'
                    }}>Overall:</Typography>
                </Grid>
                <Grid item xs={7}>
                    <Rating size="large" style={{
                        marginTop: '4%', marginLeft: '33%'
                    }} defaultValue={(profile.contribution + profile.easeOfContact + profile.timeLiness + profile.respectful) / 4} precision={0.5} readOnly/>
                </Grid>

                <Grid item xs={5.5}>
                    <Typography style={{
                        fontSize: '24px',
                        fontFamily: 'font-link',
                        color: 'white'
                    }}>Timeliness:</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Rating style={{marginTop: '3%', marginLeft: '1%'
                    }} name="half-rating" defaultValue={profile.timeLiness} precision={0.5} readOnly/>
                </Grid>

                <Grid item xs={4}>
                    <Typography style={{
                        fontSize: '24px',
                        fontFamily: 'font-link',
                        color: 'white'
                    }}>Ease of Contact:</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Rating style={{
                        marginTop: '3%', marginLeft: '58%'
                    }} name="half-rating" defaultValue={profile.easeOfContact} precision={0.5} readOnly/>
                </Grid>
                <Grid item xs={5.2}>
                    <Typography style={{
                        fontSize: '24px',
                        fontFamily: 'font-link',
                        color: 'white'
                    }}>Contributions:</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Rating style={{
                        marginTop: '3%', marginLeft: '12%'
                    }} name="half-rating" defaultValue={profile.contribution} precision={0.5} readOnly/>
                </Grid>
                <Grid item xs={5.5}>
                    <Typography style={{
                        fontSize: '24px',
                        fontFamily: 'font-link',
                        color: 'white'
                    }}>Respectful:</Typography>

                </Grid>
                <Grid item xs={3}>
                    <Rating style={{
                        marginTop: '3%',
                    }} name="half-rating" defaultValue={profile.respectful} precision={0.5} readOnly/>
                </Grid>
            </Grid>
        </Box>
        }
        </div>
        )
};

export default RatingInfo