import React,{useEffect} from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup, TextField,Radio} from '@mui/material'
import Input from '../../components/FormElements/Input'
import { UseForm,Form } from '../../components/form-hook/UseForm'
import {useDispatch,useSelector}from 'react-redux';
import { getAllUseres } from '../../redux/actions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const initialValues={
    id:0,
    name:'',
    email:'',
    phoneNumber: '',
    role: 'user',

}

const EditUsers = (props) => {

    const iddd = useParams();
    const dispatch=useDispatch();
    useEffect(() => {
        
        dispatch(getAllUseres())
    }, [dispatch])

    const alluseressssss = useSelector(state => state.userReducer.users) || [];
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values)
        props.setOpenModal(false)
    }

    return (
        <>
        {!alluseressssss ? <h1>wait</h1> : alluseressssss.filter((el )=> el._id == iddd.id).map((el )=>
        <Form>
        <Grid container>
        <Grid item xs={6}>

            <Input name='name' label='Name' value={el.name} onChange={handleInputChange} />
            <Input name='email' label='E-mail' value={el.email} onChange={handleInputChange} />
            <Input style={{backgroundColor:'red !important;' }} name='phoneNumber' label='Phone' value={el.phoneNumber} type='number' onChange={handleInputChange} />
          
        </Grid>
            <Grid item xs={6}>
                <FormControl>
                    <FormLabel>
                        Role
                    </FormLabel>
                    <RadioGroup row
                    name='role'
                    defaultValue={el.role}
                    onChange={handleInputChange} >
                        <FormControlLabel value='admin' control ={<Radio />} label='Admin'/>
                        <FormControlLabel value='user' control ={<Radio />} label='User'/>
                    </RadioGroup>
                </FormControl>
            </Grid>
          
        </Grid>
        <Button variant="contained" onClick={submitHandler} >Submit</Button>
        </Form> 

        )  }
        </>
    )
}

export default EditUsers;
