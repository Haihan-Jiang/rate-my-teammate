import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LoginForm from '../Components/LoginForm';
import NavBar from "../Components/PageElement/NavBar"

export default function BasicCard() {
    return (
        <div className="form-card__controls" style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 40% 30%",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
            height: "100%"
        }}>
            <Card sx={{minWidth: 320}}>
                <NavBar />
                <CardContent>
                    <LoginForm/>
                </CardContent>
            </Card>
        </div>
    )
};