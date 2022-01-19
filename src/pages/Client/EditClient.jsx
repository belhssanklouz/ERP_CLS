import React,{useEffect,useState} from 'react';
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

    const clients = useSelector(state => state.clientReducer.client) || [];
    const responseEdit = useSelector(state => state.clientReducer.responseEdit) || '';
    const identifiedClient = clients.filter(el=> el._id===idd.id) || [];

  

    const initialValues={
        _id:idd.id,
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


    console.log(initialValues)

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

useEffect(()=>{
    for (let input of identifiedClient ){
        setValues({
        _id:idd.id,
        name : input.name,
        phoneNumber : input.phoneNumber,
        email : input.email,
        adressLine : input.adress[0].adressLine,
        city:input.adress[0].city,
        zipCode:input.adress[0].zipCode,
        raisonSocial : input.raisonSocial,
        secteurActivite : input.secteurActivite,
        commentaire : input.commentaire})
}
},[clients])

useEffect(() => {
    dispatch(getAllClient());
}, [dispatch])

    const id = idd.id;

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(editClients({id,name,email,adress:{adressLine,city,zipCode},raisonSocial,secteurActivite,phoneNumber,commentaire}))
        dispatch(editClients(values))
    }


    return (
        <>
            <h1>Edit Client</h1>
    <Form onSubmit={submitHandler}>

        <Grid container>
        <Grid item xs={12}>
            {identifiedClient.map((el)=>
            <div>
            <Input name='_id' onChange={handleInputChange} value={el._id} type='hidden'/>
            <Input name='name' label='Name' value={el.name} onChange={handleInputChange} required />
            <Input name='raisonSocial' label='Raison Social' value={el.raisonSocial} onChange={handleInputChange} /> 
            <Input name='secteurActivite' label="Secteur D'activité" value={el.secteurActivite} onChange={handleInputChange} type='text' />
            <Input name='email' label='E-Mail' value={el.email} onChange={handleInputChange} type='text' />   
            <Input name='phoneNumber' label='Phone Number' value={el.phoneNumber} onChange={handleInputChange} type='text' />   
            <Input name='adressLine' label='Adresse' value={el.adress[0].adressLine} onChange={handleInputChange} type='text' />   
            <Input name='city' label='City' value={el.adress[0].city} onChange={handleInputChange} type='text' />   
            <Input name='zipCode' label='Zip Code' value={el.adress[0].zipCode} onChange={handleInputChange} type='text' />   
            <Input name='commentaire' label='Commentaire' value={el.commentaire} onChange={handleInputChange} type='text' />   
            </div>
            )}
      
        </Grid>
        </Grid>
        <Button variant="contained" type='submit'>Submit</Button>
            </Form>
            {responseEdit.msg==='Client updated successfully' ? <><Alert severity="success">{responseEdit.msg}</Alert>
            <Button style={{}} variant="contained" onClick={ ()=> {window.location.href = '/client'}}>retour</Button>
            </>:responseEdit.msg==='Client update Failed' ? <Alert severity="error">{responseEdit.msg}</Alert> : null}
            
        </>
    )
}

export default EditClient
