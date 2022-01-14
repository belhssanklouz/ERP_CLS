import React, { useEffect } from "react";
import Input from "../../components/FormElements/Input";
import { UseForm, Form } from "../../components/form-hook/UseForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategorys,
  editCategories,
  getCatByID,
} from "../../redux/actions";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import {browserHistory} from 'react-router';
import { Alert } from "@mui/material";
import { Fade } from "@mui/material";


const EditCategorie = (props) => {
  const iddd = useParams();

  const catbyid = useSelector((state) => state.categoryReducer.catbyid);
  const resedi = useSelector((state) => state.categoryReducer.responseedit) || '';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatByID(iddd.id));
     
  }, [dispatch]);

  const editcat = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    website: yup.string().url(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editcat),
  });
  const onSubmit = (data) => {
    dispatch(editCategories({_id:iddd.id,name:data.name,description:data.description}));
  };

  return (
    <>
      {!catbyid ? (
        <p>waiit</p>
      ) : (
          
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField variant="filled" label="Name" defaultValue={catbyid.name} {...register("name")} style={{width:"600px"}} />
            <br />
            {errors.name &&  <p> {errors.name.message}</p>}
            <TextField variant='filled' label="description" defaultValue={catbyid.description} {...register("description")} style={{width:"600px"}}/>
            {errors.description && <p>{errors.description.message}</p>}
            <br/>
            <br/>

          <Button variant="contained" type="submit">Submit</Button>
        </form>
        
      
      )}
              {resedi.msg ? <><Alert severity="success">{resedi.msg}</Alert> <Button style={{}} variant="contained" onClick={ ()=> {window.location.href = '/categories'}}>retour</Button></> : null}

      {/* )  } */}
    </>
  );
};

export default EditCategorie;
