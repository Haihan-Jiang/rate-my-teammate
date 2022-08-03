import * as React from 'react';
import './NewForm.css';
import SignupButton from "./PageElement/SignupButton";
import SearchBar from './PageElement/SearchBar';

export default function SearchPage() {
    return (<div>
        <div
            style={{
                backgroundSize: "cover",
                backgroundImage: `linear-gradient(45deg, rgba(10, 48, 78, 100), rgba(155, 173, 187, 100))`,
                height: "160vh",
            }}>
        <div style={{ position: 'absolute', right: 35 }}>
            <SignupButton />
        </div>
            <div style={{
                color: 'white', fontSize: '64px',
                fontFamily: 'font-link',  maxHeight: '130px', fontWeight: 'bold', 
                textAlign:'center', 
                paddingTop: '10.5rem'
            }}>
                Rate My Teammate 
        </div>

            <div className="search">
                <div className="searchInputs">
                    <SearchBar placeholder="Search by Name/CaseID/Major"/>
                </div>
            </div>
        </div>
    </div>  
    );
}
