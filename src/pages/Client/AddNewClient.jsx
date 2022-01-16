import React,{useState} from 'react'
import { UseForm,Form } from '../../components/form-hook/UseForm';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio,InputLabel,Select,MenuItem} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import {addClient} from '../../redux/actions';

import './AddNewClient.css'


const initialValues={
    id:0,
    name:'',
    email:'',
    raisonSocial:'',
    secteurActivite: '',
    phoneNumber:'',
    adress:[{
        adressLine:"",
     city:'',
    ZipCodeCode:''
}],
    commentaire:''
}

 const AddNewClient = (props) => {

    const dispatch = useDispatch();

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

const [name, setName] = useState("");
const [email, setEmail] = useState('');
const [adressLine,setAdressLine]=useState('');
const [city,setCity]=useState('');
const [zipCode,setZipCode]=useState('');
const [raisonSocial,setRaisonSocial]=useState('');
const [secteurActivite,setSecteurActivite]=useState('');
const [phoneNumber,setPhoneNumber]=useState('');
const [commentaire,setCommentaire]=useState('');



    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addClient({name,email,raisonSocial,secteurActivite,phoneNumber,commentaire,adress:{adressLine,city,zipCode}}))
        // props.setOpenModal(false)
    }
    
    

    return (
        <Form onSubmit={submitHandler}>
        <Grid container center>
            <Grid item xs={12} full-maxWidth={1}>
                <Input  name='name' label='name' onChange={(e)=>setName(e.target.value)} />
                <Input  name='email' label='email' onChange={(e)=>setEmail(e.target.value)} type='email'/>
                <Input name='raisonSocial' label='Raison Social' value={values.raisonSocial} onChange={(e)=>setRaisonSocial(e.target.value)} type='text'/>
                <Input name='secteurActivite' label="Secteur d'activité" value={values.secteurActivite} onChange={(e)=>setSecteurActivite(e.target.value)} type='text'/>
                <Input name='phoneNumber' label="Tel" value={values.phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type='number'/>
                <Grid md={12} item className='flex'>
                <Input  name='AdressLine' label='adresse' onChange={(e)=>setAdressLine(e.target.value)} type='text'/>
                <Input name='city' label="City"  onChange={(e)=>setCity(e.target.value)} type='text'/>
                <Input  name='zipCode' label="Code postal" onChange={(e)=>setZipCode(e.target.value)} type='Number'/>
                </Grid>
                <Input name='commentaire' label="Commentaire" value={values.secteurActivite} onChange={(e)=>setCommentaire(e.target.value)} type='text'/>

            </Grid>        
        </Grid>
        <Button variant="contained" type='submit'>Submit</Button>
</Form> 
    )
}

export default AddNewClient
