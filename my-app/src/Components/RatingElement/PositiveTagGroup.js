import React, {useState} from 'react'
import PosTag from './PosTag'
import Box from '@mui/material/Box';
import postagData from "./MOCK_POS_TAG_DATA";

const PositiveTagGroup = (props)=>{
    
    return(
        <Box sx={{ display: 'flex', flexWrap: 'wrap' ,alignItems: 'flex-end' }}>
            {postagData.map((postagData) => (
                <PosTag 
                    key={postagData.pos_tag_id}
                    value={postagData.pos_tag_id}>
                    {postagData.pos_tag}</PosTag>
            ))}
        </Box>
        
    )
}

export default PositiveTagGroup;