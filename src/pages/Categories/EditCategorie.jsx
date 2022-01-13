import React,{useEffect} from 'react'
import {FormControl, FormControlLabel, FormLabel, Grid , RadioGroup, TextField,Radio} from '@mui/material'
import Input from '../../components/FormElements/Input'
import { UseForm,Form } from '../../components/form-hook/UseForm'
import {useDispatch,useSelector}from 'react-redux';
import { getAllCategorys,editCategories } from '../../redux/actions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const EditCategorie = (props) => {
   const responseedit = useSelector(state => state.categoryReducer.responseedit) || null;
console.log('responseedit',responseedit)
    const iddd = useParams();
    const initialValues={
        _id:iddd,
        name:'',
        description:''
     
    
    }
    
    const {
        values,
        setValues,
        handleInputChange
    } = UseForm(initialValues)
    const history = useHistory()
    const submitHandler = async () => {
        
        await dispatch(editCategories(values))
        if(responseedit){

            if( responseedit.msg==="Category updated successfully "){
                  history.push('/categories')
            }
        }

    }
    const dispatch=useDispatch();
    useEffect(() => {
        
        dispatch(getAllCategorys());
    }, [dispatch])

    const allCategories = useSelector(state => state.categoryReducer.categories) || [];

    return (
<>
        {!allCategories ? <h1>wait</h1> : allCategories.filter((el )=> el._id == iddd.id).map((el )=>
        <Form>
            <span style={{display:"none"}}>
          {initialValues.name = el.name}
          {initialValues.description = el.description}
          </span>
        <Grid container>
        <Grid item xs={12}>
            <Input name='_id' value={el._id} onChange={handleInputChange} type='hidden'/>
            <Input name='name' label='Name' value={el.name} onChange={handleInputChange} />
            {!responseedit ? null : responseedit.msg }
            <Input name='description' label='Description' value={el.description} onChange={handleInputChange} />          
        </Grid>
        </Grid>
        <Button variant="contained" onClick={submitHandler} >Submit</Button>
        </Form> 

        )  }
        </>
    )
}

export default EditCategorie
