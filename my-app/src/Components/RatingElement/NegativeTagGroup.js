import React from 'react'
import NegTag from './NegTag'
import Box from '@mui/material/Box';
import negTagData from "./MOCK_NEG_TAG_DATA";

const PositiveTagGroup = (props) => {

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {negTagData.map((negTagData) => (
                <NegTag
                    key={negTagData.neg_tag_id}
                    value={negTagData.neg_tag_id}>
                    {negTagData.neg_tag}</NegTag>
            ))}
        </Box>

    )
}

export default PositiveTagGroup;