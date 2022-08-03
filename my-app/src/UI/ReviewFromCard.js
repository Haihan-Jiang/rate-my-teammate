import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReviewForm from "../Components/ReviewForm";
import NavBar from "../Components/PageElement/NavBar"


export default function BasicCard() {
    return (
        <div className="form-card__controls" style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "5rem 20rem 6rem",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
            height: "100%"
        }}>
            <Card sx={{ minWidth: 400 }}>
                <NavBar/>
                <CardContent>
                    <ReviewForm/>
                </CardContent>
            </Card>
        </div>
    )
};