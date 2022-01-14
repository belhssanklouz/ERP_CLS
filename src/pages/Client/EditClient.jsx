import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {FormControl, FormControlLabel, FormLabel, Grid , Select,MenuItem} from '@mui/material'
import {getAllClient,editClients} from "../../redux/actions";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { Alert } from "@mui/material";

import { UseForm,Form } from '../../components/form-hook/UseForm'
import Input from '../../components/FormElements/Input'





const EditClient = () => {

    const idd =useParams();
    const dispatch=useDispatch();

    const initialValues={
        _id:idd,
        name:'',
        phoneNumber:'',
        email:'',
        adressLine:'',
        city:'',
        zipCode:'',
        raisonSocial:'',
        secteurActivite:'',
        commentaire:''
    }

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editClients(values))
    }

    useEffect(() => {
        
        dispatch(getAllClient());
    }, [dispatch])

    const clients = useSelector(state => state.clientReducer.client) || [];
    const responseEdit = useSelector(state => state.clientReducer.responseEdit) || '';
    const identifiedClient = clients.filter((el)=>{return el._id===idd});
    console.log(identifiedClient)


    return (
        <>
            <Form onSubmit={submitHandler}>

        <Grid container>
        <Grid item xs={12}>
            <Input name='_id' onChange={handleInputChange} type='hidden'/>
            <Input name='name' label='Name' onChange={handleInputChange} required />
            <Input name='raisonSocial' label='Raison Social'  onChange={handleInputChange} /> 
            <Input name='secteurActivite' label="Secteur D'activité"  onChange={handleInputChange} type='text' />
            <Input name='email' label='E-Mail'  onChange={handleInputChange} type='text' />   
            <Input name='phoneNumber' label='Phone Number'  onChange={handleInputChange} type='text' />   
            <Input name='adressLine' label='Adresse' onChange={handleInputChange} type='text' />   
            <Input name='city' label='City' onChange={handleInputChange} type='text' />   
            <Input name='zipCode' label='Zip Code' onChange={handleInputChange} type='text' />   
            <Input name='commentaire' label='Commentaire' onChange={handleInputChange} type='text' />   
      
        </Grid>
        </Grid>
        <Button variant="contained" type='submit'>Submit</Button>
            </Form>
            {responseEdit ? <><Alert severity="success">{responseEdit.msg}</Alert>
            <Button style={{}} variant="contained" onClick={ ()=> {window.location.href = '/products'}}>retour</Button>
            </>:null}
            
        </>
    )
}

export default EditClient
