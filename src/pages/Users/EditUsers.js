import React,{useEffect} from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup, TextField,Radio} from '@mui/material'
import Input from '../../components/FormElements/Input'
import { UseForm,Form } from '../../components/form-hook/UseForm'
import {useDispatch,useSelector}from 'react-redux';
import { getAllUsers,editUsers } from '../../redux/actions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { Alert } from "@mui/material";


const EditUsers = (props) => {

    const iddd = useParams();
    const dispatch=useDispatch();
    useEffect(() => {
        
        dispatch(getAllUsers())
    }, [dispatch])

    const initialValues={
        id:iddd.id,
        name:'',
        email:'',
        phoneNumber: '',
        role: 'user',
    
    }

    const alluseressssss = useSelector(state => state.userReducer.users) || [];
    const responseEdit = useSelector (state=>state.userReducer.responseEdit) || null;
    console.log(alluseressssss)
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    useEffect(()=>{
        for (let user of alluseressssss){
            setValues({
                id:iddd.id,
                name:user.name,
                email:user.email,
                phoneNumber:user.phoneNumber,
                role:user.role})
                console.log(user.phoneNumber)
        }
    },[alluseressssss])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editUsers(values));
    }

    return (
        <>
        {!alluseressssss ? <h1>wait</h1> : alluseressssss.filter((el )=> el._id == iddd.id).map((el )=>
        <Form onSubmit={submitHandler}>
        <Grid container>
        <Grid item xs={6}>

            <Input name='name' label='Name' value={el.name} onChange={handleInputChange} required />
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
                    onChange={handleInputChange}
                    value={values.role}
                    >
                        <FormControlLabel value='admin' control ={<Radio />} label='Admin'/>
                        <FormControlLabel value='user' control ={<Radio />} label='User'/>
                    </RadioGroup>
                </FormControl>
            </Grid>
          
        </Grid>
        <Button variant="contained" type='submit'>Submit</Button>
        </Form> 
        )  }
         {responseEdit==='User updated successfully'? <><Alert severity="success">{responseEdit}</Alert>
            <Button style={{}} variant="contained" onClick={ ()=> {window.location.href = '/users'}}>retour</Button>
            </>:responseEdit==='User updated Failed'? <Alert severity="error">{responseEdit}</Alert> : null}

        </>
    )
}

export default EditUsers;
