import React,{useEffect} from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio} from '@mui/material'
import {UseForm,Form} from '../form-hook/UseForm';
import { makeStyles } from '@material-ui/core';
import Input from '../FormElements/Input';
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {addUser} from '../../redux/actions';

const initialValues={
    id:0,
    name:'',
    email:'',
    phoneNumber: '',
    role: 'user',

}

const useStyles = makeStyles(theme=>({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

const Addusersform = (props) => {
const dispatch = useDispatch();

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addUser(values))
        props.setOpenModal(false)
    }
    

    return (
    <Form>
    <Grid container>
        <Grid item xs={6}>
            <Input name='name' label='Name' value={values.name} onChange={handleInputChange} />
            <Input name='email' label='E-mail' value={values.email} onChange={handleInputChange} />
            <Input name='phoneNumber' label='Phone' value={values.phoneNumber} type='number' onChange={handleInputChange} />
            <Input name='password' label='password' value={values.phoneNumber} type='password' onChange={handleInputChange} />

        </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel>
                        Role
                    </FormLabel>
                    <RadioGroup row
                    name='role'
                    value={values.role}
                    onChange={handleInputChange} >
                        <FormControlLabel value='admin' control ={<Radio />} label='Admin'/>
                        <FormControlLabel value='user' control ={<Radio />} label='User'/>
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>
        <Button variant="contained" onClick={submitHandler} >Submit</Button>
    </Form> 
    )
}

export default Addusersform
