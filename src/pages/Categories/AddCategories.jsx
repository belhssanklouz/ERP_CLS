import React from 'react'
import { UseForm,Form } from '../../components/form-hook/UseForm';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {addCategories} from '../../redux/actions';


const initialValues={
    id:0,
    name:'',
    description:''
}



function AddCategories(props) {
    const dispatch = useDispatch();

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addCategories(values))
        props.setOpenModal(false)
    }
    

    return (
        <Form>
        <Grid container>
            <Grid item xs={12}>
                <Input name='name' label='Name' value={values.name} onChange={handleInputChange} />
                <Input name='description' label='Description' value={values.email} onChange={handleInputChange} type='text'/>
            </Grid>
                
            </Grid>
            <Button variant="contained" onClick={submitHandler} >Submit</Button>
        </Form> 
    )
}

export default AddCategories
