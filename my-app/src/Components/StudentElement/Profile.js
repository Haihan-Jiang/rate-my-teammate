import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tag from '../RatingElement/Tag'
import {useEffect} from "react";
import {useHistory} from "react-router-dom";

const Profile = () => {
    const [majors, setMajors] = React.useState(null);
    const [tag, setTag] = React.useState(null);
    const [profile, setProfile] = React.useState(null)

    const history = useHistory();
    const page_id = history.location.state;
    console.log(page_id)

    const url = "http://localhost:8080/Profile/get?PAGE_ID=" + page_id
    const tagUrl = "http://localhost:8080/Review/getAll/" + page_id

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        backgroundColor: 'transparent',
        padding: theme.spacing(1),
        textAlign: 'start',
        color: 'white',
    }));

    useEffect(() => {
        fetch("http://localhost:8080/Majors/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMajors(data)
            })
    }, [])

    function Major (id) {
        let major = majors.map((majors) => (
            majors.major
        ))
        console.log(major[id - 1])
        return (major[id - 1])
    }

    useEffect(()=>{
        fetch(tagUrl)
            .then((res) => {
                return res.json();
            })
            .then((data)=> {
                console.log(data)
                setTag(data);
            })
            .catch((error) => {
                console.log('error: ' + error);
            })
        },[])

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

    function renderPosTags(review){
        console.log(review)
        if(review.length === 0){
            return "No positive tags available"
        }
        for(let i = review.length - 1; i >= 0; i--){
            let tag = review[i]
            if(tag.positiveTag.length !== 0){
                let specificTag = tag.positiveTag
                return(
                    <Tag tagStyle="tag--pos">
                        {specificTag[0].positiveTag}
                    </Tag>
                )
            }
        }
        return "No positive tags available"
    }

    function renderNegTags(review){
        if(review.length === 0){
            return "No negative tags available"
        }
        for(let i = review.length - 1; i >= 0; i--){
            let tag = review[i]
            console.log(tag)
            if(tag.negativeTag.length !== 0){
                let specificTag = tag.negativeTag
                return(
                    <Tag tagStyle="tag--neg">
                        {specificTag[0].negativeTag}
                    </Tag>
                )
            }
        }
        return "No negative tags available"
    }

    return (
        <div>
            {majors && tag && profile &&
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} style={{
                    display: 'flex', jusityContent: 'center', marginTop: '3%',
                    marginRight: '3%', marginLeft: '3%'
                }}>
                    <Grid item xs={5}/>
                    <Grid item xs={10}>
                        <Typography style={{
                            fontWeight: "bold",
                            fontSize: '40px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>{profile.firstname} {profile.lastname}</Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography style={{
                            fontSize: '24px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>Major(s):
                            {" "}
                            {/*<br/>*/}
                            {Major(profile.firstMajorId)}
                            <br/>
                            {Major(profile.secondMajorId)}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{
                            fontSize: '24px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>Graduation Year: {profile.graduationYear}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography style={{
                            fontSize: '24px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>Case ID: {profile.caseID}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{
                            fontSize: '24px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>Latest Tags:</Typography>
                        <Typography style={{
                            fontSize: '18px',
                            fontFamily: 'font-link',
                            color: 'white'
                        }}>
                            {renderPosTags(tag)}
                            <br/>
                            {renderNegTags(tag)}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>}
        </div>
    )
};

export default Profile