import * as React from 'react';
import './NewForm.css';
import Box from '@mui/material/Box';
import AddStudentButton from "./PageElement/AddStudentButton";
import SearchResult from "./PageElement/SearchResult";
import Typography from '@mui/material/Typography';
import AuthContext from '../auth-store/auth-context';
import NavBar from "./PageElement/NavBar"

const ResultPage = (props) => {
    const authCtx = React.useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;

    return (
        <div style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
            height: "160vh",
        }}>
            <Box sx={{alignItems: 'center', position:'static'}}>
                <NavBar />
                <SearchResult/>
                {isLoggedIn ? <AddStudentButton/> : ''}
            </Box>
        </div>
    );
}

export default ResultPage;