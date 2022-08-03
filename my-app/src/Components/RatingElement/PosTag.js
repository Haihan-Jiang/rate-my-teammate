import Tag from './Tag'
import React, { useState } from 'react'

const PosTag = (props)=>{
    const [clicked, setClicked] = useState(false);
    const styles = ["tag--select", "tag--pos"]

    const posTagClickHandler = (e) => {
        console.log(e.target.value)
        setClicked((prevClicked) => {             
            return !prevClicked; })
        if(!clicked){
            props.onSavePosTagData(e.target.value);
        }
        if(clicked){
            props.onRemovePosTagData(e.target.value);
        }
    };
    return(
        <Tag onClick={posTagClickHandler}
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

export default PosTag;
