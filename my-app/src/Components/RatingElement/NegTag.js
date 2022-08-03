import Tag from './Tag'
import React, { useState } from 'react'

const NegTag = (props) => {
    const [clicked, setClicked] = useState(false);
    const styles = ["tag--select", "tag--neg"]
    const negTagClickeHandler = (e) => {
        console.log(e.target.value)
        setClicked((prevClicked) => {
            return !prevClicked;
        })
        if (!clicked) {
            props.onSaveNegTagData(e.target.value);
        }
        if (clicked) {
            props.onRemoveNegTagData(e.target.value);
        }
    };
    return (
        <Tag 
            onClick={negTagClickeHandler}
            type='tag'
            tagStyle={
                (clicked === true) ? styles[1] : styles[0]
            }
            tagSisze="tag--small"
            key={props.key}
            label={clicked}
            value={props.value}>
            {props.children}</Tag>

    )
}

export default NegTag;
