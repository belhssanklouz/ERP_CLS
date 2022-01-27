import React, { useState } from 'react';

import { UseForm,Form } from '../../components/form-hook/UseForm';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio,Autocomplete,TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton'



const AddDevis = () => {
    const [inputIncr,setInputIncr] = useState([{product:'',qnt:0}]);
    const products = useSelector(state=>state.ProductReducer.products) || [];
    const mappedProducts = products.map(data=>data.name) || [];

    const handleAddInput = () => {
            setInputIncr([...inputIncr,{product:'',qnt:0}])
        //  setInputIncr(inputIncr.concat({product:'',qnt:0}))
    }
    const handleRemoveInput = (index) =>{
        // const val = [...inputIncr];
        // val.splice(1,1)
        // console.log(val)
        // console.log(index,' deleted')
        // setInputIncr(val);
    }

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
            <Grid  item xs={6}>
                <Input name='numeroDevis' label='Numero de devis' value={values.name} onChange={handleInputChange} required/>
                <Input name='client' label='Client' value={values.client} onChange={handleInputChange} type='text' />         
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
            </Grid>
            <Grid item xs={6}>
                {inputIncr.map((el,index)=>(
               <div style={{display:'flex'}} key={index}>   
                <Autocomplete
                    id="product"
                    sx={{ width: 200 }}
                    options={mappedProducts}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <TextField variant="filled" {...params} label="Produit" margin="normal" onChange={handleInputChange} />
                    )}
                />
                <Input style={{width:200}} name='quantite' label='Quantité' onChange={handleInputChange} type='number' />   
                <div>
                <IconButton onClick={()=>handleAddInput()}>
                    <AddIcon />
                </IconButton>
                </div>
                <div>
                <IconButton onClick={()=>handleRemoveInput(el,index)}>
                    <RemoveIcon />
                </IconButton>  
                </div>
                </div>  ))}
                </Grid>
           
                
              
            </Grid>
            <Button variant="contained" type='submit'>Submit</Button>
        </Form> ;
};

export default AddDevis;
