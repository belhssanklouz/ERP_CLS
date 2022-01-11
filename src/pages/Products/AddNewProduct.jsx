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
        if(props.verify){
            alert(props.verify.msg)
        }
        props.setOpenModal(false)
    }
    

    return (
        <Form>
            <Grid container>
                <Grid item xs={12}>
                    <Input name='name' label='Name' value={values.name} onChange={handleInputChange} />
                    <Input name='price' label='Price' value={values.email} onChange={handleInputChange} type='number'/>
                    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                    <Select
                    name='categories'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Categories"
                        defaultValue={categories[0]._id}
                        label={categories[0].name}
                        onChange={handleInputChange}
                    >

                        {categories.map((el)=>
                        
                        <MenuItem value={el._id}>{el.name}</MenuItem>)}
                    
                    </Select>        
                </Grid>        
            </Grid>
            <Button variant="contained" onClick={submitHandler} >Submit</Button>
    </Form> 
    )
}

export default AddNewProduct
