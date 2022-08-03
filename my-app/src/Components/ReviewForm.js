import React from 'react'
import EaseOfContact from './RatingElement/EaseOfContact'
import Respectful from './RatingElement/Respectful'
import Timeliness from './RatingElement/Timeliness'
import Contributions from './RatingElement/Contributions'
import Grade from './RatingElement/Grade'
import Course from './RatingElement/Course'
import WorkAgain from './RatingElement/WorkAgain'
import Comment from './RatingElement/Comment'
import Year from './RatingElement/Year'
import Semester from './RatingElement/Semester'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PublishIcon from '@mui/icons-material/Publish';
import PosTag from './RatingElement/PosTag'
import NegTag from './RatingElement/NegTag'
import CachedIcon from '@mui/icons-material/Cached';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useHistory} from "react-router-dom";
import moment from 'moment';
import AuthContext from '../auth-store/auth-context'

const ReviewForm = () => {
    const [easeOfContact, setEaseOfContact] = React.useState('');
    const [respectful, setRespectful] = React.useState('');
    const [timeliness, setTimeliness] = React.useState('');
    const [contributions, setContributions] = React.useState('');
    const [year, setEnteredYear] = React.useState('');
    const [semester, setEnteredSemester] = React.useState('');
    const [work, setEnteredWork] = React.useState('');
    const [course, setEnteredCourse] = React.useState('');
    const [grade, setEnteredGrade] = React.useState('');
    const [comments, setEnteredComments] = React.useState('');
    const [selectedPosTagList, setSelectedPosTagList] = React.useState('');
    const [selectedNegTagList, setSelectedNegTagList] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('Review succesfully added!');
    const [posTagData, setPosTagdata] = React.useState(null);
    const [negTagData, setNegTagdata] = React.useState(null);


    const authCtx = React.useContext(AuthContext);
    const history = useHistory();
    const page_id = history.location.state;
    console.log(page_id)
    const account_id = parseFloat(authCtx.token, 10);

    React.useEffect(() => {
        fetch("http://localhost:8080/PosTags/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPosTagdata(data)
            })
    }, [])

    React.useEffect(() => {
        fetch("http://localhost:8080/NegTags/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setNegTagdata(data)
            })
    }, [])


    const handleClose = (event) => {
        setOpen(false);
        history.push({
            pathname: "/studentPage",
            state: page_id
        })
    };

    const saveEaseOfContactScore = (easeOfContact) => {
        setEaseOfContact(easeOfContact);
    };

    const saveRespectfulScore = (respectful) => {
        setRespectful(respectful);
    };

    const saveTimelinessScore = (timeliness) => {
        setTimeliness(timeliness);
    };

    const saveContributionsScore = (contributions) => {
        setContributions(contributions);
    };

    const saveYearDataHandler = (enteredYear) => {
        setEnteredYear(enteredYear);
    };

    const saveSemesterDataHandler = (enteredSemester) => {
        setEnteredSemester(enteredSemester);
    };

    const saveWorkDataHandler = (enteredWork) => {
        setEnteredWork(enteredWork);
    };

    const saveCourseDataHandler = (course) => {
        setEnteredCourse(course);
    };

    const saveGradeDataHandler = (grade) => {
        setEnteredGrade(grade);
    };

    const saveCommentsDataHandler = (comments) => {
        setEnteredComments(comments);
    };

    const savePosTagDataHandler = (selectedPosTag) => {
        if (!selectedPosTagList.includes(selectedPosTag)) {
            setSelectedPosTagList((prevSelected) => {
                return [selectedPosTag, ...prevSelected]
            });
        }
    };

    const removePosTagDataHandler = (selectedPosTag) => {
        const tagsCopy = [...selectedPosTagList];
        var filtered = tagsCopy.filter(function (value, index, arr) {
            return value != selectedPosTag;
        });
        setSelectedPosTagList(filtered)
    };

    const saveNegTagDataHandler = (selectedNegTag) => {
        if (!selectedNegTagList.includes(selectedNegTag)) {
            setSelectedNegTagList((prevSelected) => {
                return [selectedNegTag, ...prevSelected]
            });
        }
    };

    const removeNegTagDataHandler = (selectedNegTag) => {
        const tagsCopy = [...selectedNegTagList];
        var filtered = tagsCopy.filter(function (value, index, arr) {
            return value != selectedNegTag;
        });
        setSelectedNegTagList(filtered)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true)
        const cur_date = Date().toLocaleString();
       
        const ratings = {
            accountId: account_id,
            pageId: page_id,
            reviewDate: moment(cur_date).format('YYYY-MM-DD'),
            easeOfContact: easeOfContact,
            respectful: respectful,
            timeLiness: timeliness,
            contribution: contributions,
            semesterAndYear: year+semester,
            workAgain: work,
            course: course,
            grade: grade,
            comments: comments,
        };
        fetch(`http://localhost:8080/Review/add/${page_id}/${account_id}`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ratings)
        }).then((res) => {
            const jsonres = res.json()
            setIsLoading(false)
            if (res.ok) {
                return jsonres;
            }
        }).then((data) => {
            console.log(data)
            if (data === -1) {
                setMessage('You already reviewed this student...')
            } else {
                console.log(selectedPosTagList);
                //send review pos tag request
                for (let i = 0; i < selectedPosTagList.length; i++) {
                    let pos_tag_id = parseFloat(selectedPosTagList[i], 10);
                    console.log(pos_tag_id)
                    let url = `http://localhost:8080/ReviewPosTags/add/${data}`;
                    fetch(url, {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(pos_tag_id)
                    })
                    console.log('pos tag Succefully added');
                }

                //send review neg tag request
                for (let i = 0; i < selectedNegTagList.length; i++) {
                    let neg_tag_id = parseFloat(selectedNegTagList[i], 10);
                    console.log(neg_tag_id)
                    let url = `http://localhost:8080/ReviewNegTags/add/${data}`;
                    fetch(url, {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(neg_tag_id)
                    })
                    console.log('neg tag Succefully added');
                }
            }
            setOpen(true)
        })
    };

    return (
        <form onSubmit={submitHandler}>
            <div
                style={{
                    display: "flex",
                    fontSize: '24px',
                    fontFamily: 'font-link',
                    justifyContent: "center",
                    color: '#24282B',
                    marginTop: '40px',
                    marginBottom: '20px',
                    borderRadius: '12px',
                    fontWeight: 'bold'
                }}>
                Rate and Review
        </div>
            <div
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    padding: '1.0rem 5.0rem 1.0rem 10.0rem',
                    color: '#24282B'
                }}>
                <EaseOfContact onSaveEaseOfContractScore={saveEaseOfContactScore} />
                <Respectful onSaveRespectfulScore={saveRespectfulScore} />
                <Timeliness onSaveTimelinessScore={saveTimelinessScore} />
                <Contributions onSaveContributionsScore={saveContributionsScore} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 0.5,
                        m: 0.5,
                        alignItems: 'flex-end'
                    }}
                >
                    <Typography noWrap fontFamily="font-link"
                        style={{
                            fontSize: '18px',
                            marginRight: "40px",

                        }}>When did you cooperate?</Typography>
                    <Year onSaveYearData={saveYearDataHandler} />
                    <Semester onSaveSemesterData={saveSemesterDataHandler} />
                </Box>

                <WorkAgain onSaveWorkData={saveWorkDataHandler} />
                <Course onSaveCourseData={saveCourseDataHandler} />
                <Grade onSaveGradeData={saveGradeDataHandler} />
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

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                        {posTagData && posTagData.map((posTagData) => (
                            <PosTag
                                onRemovePosTagData={removePosTagDataHandler}
                                onSavePosTagData={savePosTagDataHandler}
                                value={posTagData.id}
                            >
                                {posTagData.positiveTag}</PosTag>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                        {negTagData && negTagData.map((negTagData) => (
                            <NegTag
                                onRemoveNegTagData={removeNegTagDataHandler}
                                onSaveNegTagData={saveNegTagDataHandler}
                                value={negTagData.id}
                            >
                                {negTagData.negativeTag}</NegTag>
                        ))}
                    </Box>
                </Box>
                <Comment onSaveCommentsData={saveCommentsDataHandler} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 0.5,
                        m: 0.5,
                    }}
                >
                    {!isLoading && <Button
                        style={{
                            backgroundColor: '#0a304e',
                            marginTop: '2%',
                            marginLeft: '35%',
                            color: '#E2ECF3', fontSize: '15px', fontFamily: 'font-link', maxHeight: '36px'
                        }}
                        type='submit'
                        variant='contained' color='inherit' size='small' startIcon={<PublishIcon />}>
                        Publish
            </Button>}

                    {isLoading && <Button disabled
                        style={{
                            backgroundColor: '#A2ACA7',
                            marginTop: '2%',
                            marginLeft: '35%',
                            color: '#E2ECF3', fontSize: '15px', fontFamily: 'font-link', maxHeight: '36px'
                        }}
                        variant='contained' color='inherit' size='small' startIcon={<CachedIcon />}>
                        Publishing...
            </Button>}

                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" style={{ width: '30rem', fontSize: '18px', fontFamily: 'font-link' }}>
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions display='center'>
                        <Button onClick={handleClose} style={{
                            color: '#0a304e', fontSize: '13px', fontFamily: 'font-link',
                            maxHeight: '28px'
                        }} color='inherit' size='small'
                        >
                            Ok
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </form>



    )
}

export default ReviewForm;