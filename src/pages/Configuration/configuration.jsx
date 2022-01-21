import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Form, UseForm } from '../../components/form-hook/UseForm';
import { getAllCompanies,editCompany } from '../../redux/actions';
import Input from '../../components/FormElements/Input';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loading from '../../components/loading/loading';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    roott: {
        '& .MuiButtonBase-root': {
            background:'var(--main-color)',
            color:'white'
        }
    }
}));

const Configuration = () => {
const classes = useStyles();
    const dispatch = useDispatch();

    const allCompanies = useSelector(state=>state.companyReducer.company) || [];
    const loading = useSelector (state=>state.companyReducer.loading);

    const initialValues = {
        id:'',
        name:allCompanies.name,
        email:allCompanies.email,
        adress:'',
        phoneNumber:'',
        tva:'',
        m_fiscal:''

    }

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    useEffect(()=>{
        for (let company of allCompanies){
            setValues({
                id:company._id,
                name:company.name,
                email:company.email,
                adress:company.adress,
                phoneNumber:company.phoneNumber,
                tva:company.tva,
                m_fiscal:company.m_fiscal
            })
        }
    },[allCompanies])

    useEffect(()=>{
        dispatch(getAllCompanies());
    },[dispatch])

    console.log(values)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values);
        dispatch(editCompany(values));
    }

    if(loading){
        return <Loading />
    }

    return (
            <div>
            <h1>Profil configuration</h1>
            {allCompanies.map((el,i)=>
            <Form key={i+1} onSubmit={submitHandler}>
            <Input key={i+2} name='name' label='Nom de la société' value={el.name} onChange={handleInputChange} required />
            <Input key={i+3} name='adress' label='Adress' value={el.adress} onChange={handleInputChange} required />
            <Input key={i+4} name='email' label='E-Mail' value={el.email} onChange={handleInputChange} required/>
            <Input key={i+5} name='phoneNumber' label='Numero de téléphone' value={el.phoneNumber} onChange={handleInputChange} type='number' required/>
            <Input key={i+6} name='tva' label='Code TVA' value={el.tva} onChange={handleInputChange} required/>
            <Input key={i+8} name='m_fiscal' label='Matricule Fiscale' value={el.m_fiscal} onChange={handleInputChange} required/>
            <Button className={classes.roott} key={i+7} variant='contained' type='submit'>Submit</Button>
            </Form>
            )}
        </div>
    )
}

export default Configuration
