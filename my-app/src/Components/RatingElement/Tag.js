import React from 'react'
import "./Tag.css"

const STYLES = [
    "tag--select",
    "tag--pos",
    "tag--neg"
]

const SIZES =["tag--medium", "tag--small"]

const Tag = (props) =>{
    const checkTagStyle = STYLES.includes(props.tagStyle) ? props.tagStyle: STYLES[0];
    const checkTagSize = SIZES.includes(props.tagSize) ? props.tagSize: SIZES[0];


    return (
        <button className={`tag ${checkTagStyle} ${checkTagSize}`}
        type='button'
        label={props.label}
        value={props.value}
        onClick={props.onClick} >
                {props.children}
        </button>
    )
}

export default Tag;