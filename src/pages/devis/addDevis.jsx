import React from 'react';

import { UseForm,Form } from '../../components/form-hook/UseForm';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio} from '@mui/material';


const AddDevis = () => {

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

  return <Form onSubmit={submitHandler}>
        <Grid container>
            <Grid item xs={12}>
                <Input name='numeroDevis' label='Numero de devis' value={values.name} onChange={handleInputChange} required/>
                <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={values}
                    onChange={handleInputChange}
                    renderInput={(params) => <TextField {...params} />} />               
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />


            </Grid>
                
            </Grid>
            <Button variant="contained" type='submit'>Submit</Button>
        </Form> ;
};

export default AddDevis;
