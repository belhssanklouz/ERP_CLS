import React, { useState, useEffect } from 'react';

import { UseForm,Form } from '../../components/form-hook/UseForm';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio,Autocomplete,TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector,useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton'
import { addDevis,addtempDevis,getProdByName } from '../../redux/actions';
import './addDevis.css'


const AddDevis = () => {





    const dispatch = useDispatch();
    const [inputIncr,setInputIncr] = useState([{product:'',qnt:1}]);
    const products = useSelector(state=>state.ProductReducer.products) || [];
    const mappedProducts = products.map(data=>data.name) || [];
    const selected = useSelector(state=>state.ProductReducer.selected) || []

    const handleAddInput = () => {
            setInputIncr([...inputIncr,{product:'',qnt:1}])
        //  setInputIncr(inputIncr.concat({product:'',qnt:0}))
    }
    const onChange = (index,e) => {
        const { name, value } = e.target;
        const list = [...inputIncr];
        list[index][name] = value;
        setInputIncr(list);
    }
    const handleRemoveInput = (el,index) =>{
       
        el.preventDefault();
        const x = inputIncr.filter((el,i)=>i !==index);
        const xx = [...inputIncr];
        xx.splice(index,1);
        setInputIncr(xx);
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

    const confirm = (inputIncr) =>{
        for(let input of inputIncr){
            dispatch (getProdByName(input.product,input.qnt))
        }
        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        confirm(inputIncr)
    }
    

  return <Form onSubmit={submitHandler}>
        <Grid container>
            <Grid  item xs={6}>
                <Input name='numerodevis' label='Numero de devis' value={values.numerodevis} onChange={handleInputChange} required/>
                <Input name='client' label='Client' value={values.client} onChange={handleInputChange} type='text' />         
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
                <Input name='validity' label='Date de validité' value={values.email} onChange={handleInputChange} type='text' />
            </Grid>
            <Grid item xs={6}>
                {inputIncr.map((el,index)=>(
               <div className='adddevis__product_input' key={index}>   
                <Autocomplete
                    name='product'
                    id="product"
                    value={el.product.name}
                    options={mappedProducts}
                    onSelect={(e)=>{
                        e.preventDefault();
                    const { name, value } = e.target;
                    const list = [...inputIncr];
                    list[index][name] = value;
                    return setInputIncr(list);
                    }}
                    sx={{ width: 200 }}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                        <TextField variant="filled" name='product' {...params} label="Produit" margin="normal"  />
                    )} 
                
                />
                <Input style={{width:200}} name='qnt' label='Quantité' value={el.qnt} onChange={(e)=>{onChange(index,e)}} type='number' />   
                <div>
                <IconButton onClick={()=>handleAddInput()}>
                    <AddIcon />
                </IconButton>
                </div>
                <div>
                <IconButton onClick={(e)=>handleRemoveInput(e,index)}>
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
