import React from 'react'

import { TextField } from '@mui/material'

const Input = (props) => {
    return (
        <TextField variant='filled' style={{backgroundColor:'red !important;' }} name={props.name} label={props.label} defaultValue={props.value} onChange={props.onChange} type={props.type} hidden={true}/>
            
        
    )
}

export default Input
