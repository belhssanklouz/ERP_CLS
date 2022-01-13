import React,{useEffect} from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid , Select,MenuItem} from '@mui/material'
import Input from '../../components/FormElements/Input'
import { UseForm,Form } from '../../components/form-hook/UseForm'
import {useDispatch,useSelector}from 'react-redux';
import { getAllCategorys,editProduct, getAllProducts } from '../../redux/actions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const EditProduct = () => {

    const iddd = useParams();
    const initialValues={
        _id:iddd,
        name:'',
        price:0,
        description:'',
        isservice:false,
        categories:[]
    }

    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)

    const history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(editProduct(values))
      history.push('/')
     
    }

    const dispatch=useDispatch();
    useEffect(() => {
        
        dispatch(getAllProducts());
    }, [dispatch])

    const categories = useSelector(state => state.categoryReducer.categories) || [];
    const allProducts = useSelector(state => state.ProductReducer.products) || [];

    // const defaultCatid = allProducts.filter((el )=> el._id === iddd.id).map((el )=>el.categories)
    // const defaultCatname = categories.filter(el=>el._id ==defaultCatid[0]).map(ai=>ai)
    // console.log(defaultCatname[0].name)
    return (
<>
        {!allProducts ? <h1>wait</h1> : allProducts.filter((el )=> el._id === iddd.id).map((el )=>
        <Form>
            <span style={{display:"none"}}>
          {initialValues.name = el.name}
          {initialValues.description = el.description}
          {initialValues.categories = el.categories[0]._id}
          </span>
        <Grid container>
        <Grid item xs={12}>
            <Input name='_id' value={el._id} onChange={handleInputChange} type='hidden'/>
            <Input name='name' label='Name' value={el.name} onChange={handleInputChange} />
            <Input name='description' label='Description' value={el.description} onChange={handleInputChange} /> 
            <Input name='price' label='Price' value={el.price} onChange={handleInputChange} type='number' />   
            <Select
                    name='categories'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Categories"
                        defaultValue={el.categories[0]}
                        onChange={handleInputChange}
                    >

                        {categories.map((el)=>
                        
                        <MenuItem value={el._id}>{el.name}</MenuItem>)}
                    
                    </Select> 
      
        </Grid>
        </Grid>
        <Button variant="contained" onClick={submitHandler} >Submit</Button>
        </Form> 

        )  }
        </>
    )
}

export default EditProduct
