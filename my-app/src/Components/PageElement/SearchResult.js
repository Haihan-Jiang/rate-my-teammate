import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Tag from "../RatingElement/Tag";
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {ButtonGroup} from "@mui/material";

const SearchResult = (props) => {
    const [result, setResult] = React.useState(null);
    const [majorsData, setMajorsData] = React.useState(null);
    const history = useHistory();
    const text = history.location.state.text
    const major = history.location.state.major

    function chooseResultHandler (student) {
        console.log(student)
        history.push({
            pathname: "/studentPage",
            state: student
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/Majors/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMajorsData(data)
            })
    }, [])

    function Major (id) {
        let major = majorsData.map((majorsData) => (
            majorsData.major
        ))
        return (major[id - 1])
    }

    let url = "http://localhost:8080/Profile/search";
    // check for caseID
    var hasNumber = /\d/;
    let caseID = hasNumber.test(text);

    if (caseID){
        url = url + "?caseId=" + text
    } else if(major){
        url = url + "?major=" + text
    } else {
        const name = text.split(' ');
        url = url + "?firstname=" + name[0] + "&lastname=" + name[1]
    }

    useEffect(()=>{
            fetch(url)
                .then((res) => {
                    return res.json();
                })
                .then((data)=> {
                    console.log(data)
                    console.log(data[0].positiveTag)
                    setResult(data)
                })
                .catch((error) => {
                    console.log('error: ' + error);
                })
        },[])

    const Length = function(){
        console.log(result)
        return(
            result.length.toString() + ' '
        )
    }

    function posTags(tag){
        if(tag.length === 0){
            return "No positive tags available"
        }
        var map = {};
        var maxTag = tag[0].positiveTag, maxCount = 1;
        for(let i = 0; i < tag.length; i++){
            var ta = tag[i].positiveTag;
            if(map[ta] == null)
                map[ta] = 1;
            else
                map[ta] ++;
            if(map[ta] > maxCount){
                maxTag = ta;
                maxCount = map[ta];
            }
        }
        return(
            <Tag tagStyle="tag--pos">
                {maxTag}
            </Tag>
        )
    }

    function negTags(tag){
        if(tag.length === 0){
            return "No negative tags available"
        }
        var map = {};
        var maxTag = tag[0].negativeTag, maxCount = 1;
        for(let i = 0; i < tag.length; i++){
            var ta = tag[i].negativeTag;
            if(map[ta] == null)
                map[ta] = 1;
            else
                map[ta] ++;
            if(map[ta] > maxCount){
                maxTag = ta;
                maxCount = map[ta];
            }
        }
        return(
            <Tag tagStyle="tag--neg">
                {maxTag}
            </Tag>
        )
    }

    return(
        <div style={{
            padding: "0.5rem 23rem 2rem",
            justifyContent: "center",
            alignItems: "center",
            display: 'f'
        }}>
             {result &&
            <Typography style={{
                display: "flex",
                fontSize: '24px',
                fontFamily: 'font-link',
                justifyContent: "center",
                alignItems: "center",
                padding: "1.3rem",
                color: 'white',
            }}>
                <Length/>
                students matched your search
            </Typography>
            }
             {result && majorsData &&
                <Box sx={{alignItems: 'center', position: 'flex', justifyContent: 'center'}}>
                    <ButtonGroup orientation="vertical">
                        {result.map((result) => (
                            <Button
                                key={result.id}
                                style={{
                                    fontSize: '15px',
                                    fontFamily: 'font-link',
                                    color: 'white',
                                    backgroundColor: '#9BADBB',
                                    marginTop: 20
                                }}
                                variant='contained' color='inherit' size='big'
                                onClick={() => chooseResultHandler(result.profile.id)}
                            >
                                <Grid container spacing={1}
                                      style={{
                                          width: 700,
                                          justifyItems: 'center',
                                          alignItems: 'center',
                                          marginTop: 10,
                                          marginBottom: 10,
                                          marginLeft: 40,
                                      }}>
                                    <Grid xs={3}>
                                        <Typography style={{
                                            fontWeight: "bold",
                                            fontSize: '28px',
                                            fontFamily: 'font-link',
                                        }}>
                                            {result.profile.firstname}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={3}>
                                        <Typography style={{
                                            fontWeight: "bold",
                                            fontSize: '28px',
                                            fontFamily: 'font-link',
                                        }}>
                                            {result.profile.lastname}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={1}/>
                                    <Grid xs={3}>
                                        <Typography style={{
                                            fontWeight: "bold",
                                            fontSize: '15px',
                                            fontFamily: 'font-link'
                                        }}>
                                            Graduate Year
                                        </Typography>
                                    </Grid>
                                    <Grid xs={1}>
                                        {result.profile.graduationYear}
                                    </Grid>
                                    <Grid xs={3}>
                                        <Typography style={{
                                            fontWeight: "bold",
                                            fontSize: '15px',
                                            fontFamily: 'font-link',
                                        }}>
                                            Overall
                                        </Typography>
                                        <Rating style={{
                                            color: 'white'
                                        }}
                                                value={result.profile.overallRating}
                                                name="half-rating" defaultValue={0.0} precision={0.5}
                                                readOnly/>
                                    </Grid>
                                    <Grid xs={3}>
                                        <Typography style={{
                                            fontWeight: "bold",
                                            fontSize: '15px',
                                            fontFamily: 'font-link',
                                        }}>
                                            Major
                                        </Typography>
                                        {Major(result.profile.firstMajorId)}
                                        <br/>
                                        {Major(result.profile.secondMajorId)}
                                    </Grid>
                                    <Grid xs={0.5}>
                                    </Grid>
                                    <Grid xs={5}>
                                        {posTags(result.positiveTag)}
                                        <br/>
                                        {negTags(result.negativeTag)}
                                    </Grid>
                                </Grid>
                            </Button>
                        ))}
                </ButtonGroup>
                </Box>
            }
        </div>
    )
}

export default SearchResult;