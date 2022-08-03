import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Tag from "../RatingElement/Tag";
import {useEffect} from "react";
import AuthContext from '../../auth-store/auth-context';
import {useHistory} from "react-router-dom";

const Comment = (props) => {
    const [comment, setComment] = React.useState(null);

    const commentHandler = (result) => {
        const commentData = result.target.value
    };

    const authCtx = React.useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    const history = useHistory();
    const page_id = history.location.state

    const url = "http://localhost:8080/Review/getAll/" + page_id

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setComment(data)
            })
    }, [])

    function workAgain(again) {
        if(again){
            return ("Yes")
        } else {
            return ("No")
        }
    }

    function overall(rating) {
        return((rating.timeLiness + rating.respectful + rating.easeOfContact + rating.contribution)/4)
    }

    const clickHandler = (id) => {
        console.log(id)
        history.push({
            pathname: "/correction",
            state: id
        })
    };

    return (
        <div style={{
            padding: "1rem 12rem 12rem 13.5rem",
            justifyContent: "center",
            alignItems: "center",
            display: 'f'
        }}>
            {comment &&
            <Box sx={{ alignItems: 'center', position: 'flex', justifyContent: 'center' }}>
                <List>
                    {comment.map((comment) => (
                        <Button
                            key={comment.review.id}
                            style={{
                                fontSize: '15px',
                                fontFamily: 'font-link',
                                color: 'white',
                                backgroundColor: '#9BADBB',
                                marginTop: '3rem',
                                width: '60rem'
                            }}
                            variant='contained' color='inherit' size='big'
                            onClick={commentHandler}
                        >
                            <Grid container spacing={2}
                                style={{
                                    width: '100rem',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10,
                                    marginLeft: 3,
                                }}>
                                <Grid xs={2}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '28px',
                                        fontFamily: 'font-link',
                                    }}>
                                        {comment.review.course}
                                    </Typography>
                                </Grid>

                                <Grid xs={2} >
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '15px',
                                        fontFamily: 'font-link'
                                    }}>
                                        Year of Project
                                    </Typography>
                                </Grid>
                                <Grid xs={1.5}>
                                    {comment.review.semesterAndYear}
                                </Grid>

                                <Grid xs={2.3} >
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '15px',
                                        fontFamily: 'font-link'
                                    }}>
                                        Grade on project
                                    </Typography>
                                </Grid>
                                <Grid xs={0.2}>
                                    {comment.review.grade}
                                </Grid>

                                <Grid xs={3.4} >
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '15px',
                                        fontFamily: 'font-link'
                                    }}>
                                       Would work with again?
                                    </Typography>
                                </Grid>
                                <Grid xs={0.4}>
                                    {workAgain(comment.review.workAgain)}
                                </Grid>

                                <Grid xs={2} style={{marginTop: '0.5rem'}}>
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
                                        value={overall(comment.review)}
                                        name="half-rating" defaultValue={0.0} precision={0.5}
                                        readOnly />
                                </Grid>


                                <Grid xs={10} style={{ marginTop: '0.5rem' }}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '16px',
                                        fontFamily: 'font-link',
                                    }}>
                                        {comment.review.comments}
                                    </Typography>
                                </Grid>

                                <Grid xs={2} style={{ marginTop: '0.5rem' }}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '11px',
                                        fontFamily: 'font-link',
                                    }}>
                                        Ease of Contact
                                    </Typography>
                                    <Rating style={{
                                        color: 'white'
                                    }}
                                        value={comment.review.easeOfContact}
                                        name="half-rating" defaultValue={0.0} precision={0.5}
                                        readOnly size='small'/>
                                </Grid>

                                <Grid xs={2} style={{ marginTop: '0.5rem' }}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '11px',
                                        fontFamily: 'font-link',
                                    }}>
                                        Timeliness
                                    </Typography>
                                    <Rating style={{
                                        color: 'white'
                                    }}
                                        value={comment.review.timeLiness}
                                        name="half-rating" defaultValue={0.0} precision={0.5}
                                        readOnly size='small'/>
                                </Grid>

                                <Grid xs={2} style={{ marginTop: '0.5rem' }}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '11px',
                                        fontFamily: 'font-link',
                                    }}>
                                        Contributions
                                    </Typography>
                                    <Rating style={{
                                        color: 'white'
                                    }}
                                        value={comment.review.contribution}
                                        name="half-rating" defaultValue={0.0} precision={0.5}
                                        readOnly size='small'/>
                                </Grid>

                                <Grid xs={2} style={{ marginTop: '0.5rem' }}>
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '11px',
                                        fontFamily: 'font-link',
                                    }}>
                                        Respectful
                                    </Typography>
                                    <Rating style={{
                                        color: 'white'
                                    }}
                                        value={comment.review.respectful}
                                        name="half-rating" defaultValue={0.0} precision={0.5}
                                        readOnly size='small'/>
                                </Grid>

                                <Grid xs={4} >
                                    {comment.positiveTag.map((tag) => (
                                        <Tag
                                            tagStyle="tag--pos"
                                            tagSisze="tag--small"
                                            key={tag.id}>
                                            {tag.positiveTag}</Tag>
                                    ))}
                                    {comment.negativeTag.map((tag) => (
                                        <Tag
                                            tagStyle="tag--neg"
                                            tagSisze="tag--small"
                                            key={tag.id}>
                                            {tag.negativeTag}</Tag>
                                    ))}
                                </Grid>

                                {isLoggedIn ? <Grid xs={2} >
                                    <a style={{
                                            marginTop: '0.5rem',
                                            display: "flex",
                                            fontSize: '11px',
                                            fontFamily: 'font-link',
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: 'white',
                                            textDecorationLine: 'underline',
                                        }} onClick={() => clickHandler(page_id)}>
                                        Submit Correction
                                    </a>
                                </Grid> : ''}

                                <Grid xs={2} >
                                    <Typography style={{
                                        fontWeight: "bold",
                                        fontSize: '12px',
                                        fontFamily: 'font-link'
                                    }}>
                                        {comment.reviewDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Button>
                    ))}
                </List>
            </Box>
            }
        </div>

    )
}

export default Comment;