import React from 'react'
import { UseForm,Form } from '../../components/form-hook/UseForm';
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup,Radio,InputLabel,Select,MenuItem} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Input from '../../components/FormElements/Input';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';
import {addProducts} from '../../redux/actions';



const initialValues={
    id:0,
    name:'',
    description:'',
    Price:0,
    Categories: ''
}


const AddNewProduct = (props) => {

    const categories = useSelector(state => state.categoryReducer.categories)|| [];

    const dispatch = useDispatch();

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addProducts(values))
        // if(props.verify){
        //     alert(props.verify.msg)
        // }
        // props.setOpenModal(false)
    }
    

    return (
        <Form onSubmit={submitHandler}>
            <Grid container>
                <Grid item xs={12}>
                    <Input name='name' label='Name' value={values.name} onChange={handleInputChange} required />
                    <Input name='description' label='description' value={values.description} onChange={handleInputChange}  />
                    <Input name='price' label='Price' value={values.email} onChange={handleInputChange} type='number'/>
                    <FormControl required sx={{m:1,minWidth:120}}>
                    <InputLabel id="demo-simple-select-required-label">Categories</InputLabel>
                    <Select
                    required
                    name='categories'
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        label="Categories"
                        onChange={handleInputChange}
                    >
                    
                        {categories.map((el)=>
                        
                        <MenuItem value={el._id}>{el.name}</MenuItem>)}
                    
                    </Select>     
                    </FormControl>   
                </Grid>        
            </Grid>
            <Button variant="contained" type='submit'>Submit</Button>
    </Form> 
    )
}

export default AddNewProduct
