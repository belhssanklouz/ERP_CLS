import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core';
export function UseForm  (initialValues) {

    const [values,setValues]=useState(initialValues);

    const handleInputChange = e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }


    return {
        values,
        setValues,
        handleInputChange
    }
}


const useStyles = makeStyles(theme=>({
    root: {
        '& .MuiFormControl-root': {
            width: '98%',
            margin: theme.spacing(1)
        }
    }
}));

export function Form(props) {

    const classes = useStyles();


    return (
        <form onSubmit={props.onSubmit} className={classes.root}>
            {props.children}
        </form>
    )
}




