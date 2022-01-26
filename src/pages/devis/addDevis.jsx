import React from 'react';

import { UseForm,Form } from '../../components/form-hook/UseForm';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio,Autocomplete,TextField} from '@mui/material';

import { useSelector } from 'react-redux';



const AddDevis = () => {

    const products = useSelector(state=>state.ProductReducer.products) || [];
    const mappedProducts = products.map(data=>data.name) || [];
    console.log(products);

    const initialValues ={
        numerodevis:'',
        datevalidite:"",
        client:"",
        listproduit:{},
        qnt:"",
    }

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(values)
        // dispatch(addCategories(values))
        // props.setOpenModal(false)
    }
    

  return <Form onSubmit={submitHandler}>
        <Grid container>
            <Grid item xs={12}>
                <Input name='numeroDevis' label='Numero de devis' value={values.name} onChange={handleInputChange} required/>
                        
                <Input name='client' label='Client' value={values.client} onChange={handleInputChange} type='text' />
                <Autocomplete
                    multiple
                    id="tags-standard"
                    options={mappedProducts}
                    getOptionLabel={(option) => option}
                    defaultValue={[mappedProducts[0]]}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="filled"
                        label="Produits"
                        placeholder="Choisir vos produits"
                    />
                    )}
                />                
      <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />


            </Grid>
                
            </Grid>
            <Button variant="contained" type='submit'>Submit</Button>
        </Form> ;
};

export default AddDevis;
