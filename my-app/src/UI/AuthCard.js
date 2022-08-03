import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AuthForm from "../Components/AuthForm";
import NavBar from "../Components/PageElement/NavBar"

export default function AuthCard() {
    return (
        <div className="form-card__controls" style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "5% 35% 30%",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
            height: "100vh"
        }}>
            <Card sx={{minWidth: 400}}>
                <NavBar/>
                <CardContent>
                    <AuthForm/>
                </CardContent>
            </Card>
        </div>
    )
}