import * as React from 'react';
import './SearchBar.css'
import SearchButton from './SearchButton';
import { useHistory } from "react-router-dom";

export default function SearchBar({placeholder}) {
    const [text, setText] = React.useState('');
    const [majorsData, setMajorsData] = React.useState(null);
    const history = useHistory();

    React.useEffect(() => {
        fetch("http://localhost:8080/Majors/getAll")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMajorsData(data)
            })
    }, [])

    const textChangeHandler = (event) => {
        console.log(event.target.value)
        setText(event.target.value);
    };

    const clickHandler = (event) => {
        event.preventDefault();
        console.log(text)

        let major = majorsData.map((majorsData) => (
            majorsData.major
        ))
        let hasMajor = major.includes(text)
        console.log(hasMajor)

        history.push({
            pathname: "/result",
            state: {
                text:text,
                major: hasMajor}
        })
    };

    return (
            <div className="search">
                <div className="searchInputs">
                    <input type="text" style={{ marginTop: '2rem' }}
                    value={text}
                    placeholder={placeholder} 
                    onChange={textChangeHandler} />
                    {majorsData &&
                    <SearchButton onClick={clickHandler} />}
                </div>
        </div>
    )
}