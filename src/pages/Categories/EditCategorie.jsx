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
import {browserHistory} from 'react-router'


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
          <div style={{display:"flex",textAlign:"center",justifyContent:"start",alignItems:"center"}}>
            <label style={{width:"300px"}}> Name</label>
            <TextField defaultValue={catbyid.name} {...register("name")} style={{width:"600px"}} />
            <br />
            {errors.name &&  <p> {errors.name.message}</p>}
          </div>
          <div style={{display:"flex",textAlign:"center",justifyContent:"start",alignItems:"center", marginBottom: 10 }} >
            <label style={{width:"300px"}}>description</label>
            <TextField defaultValue={catbyid.description} {...register("description")} style={{width:"600px"}}/>
            {errors.description && <p>{errors.description.message}</p>}
          </div>

          <TextField type="submit" />
        </form>
        
      
      )}
              {resedi.msg ? <><p style={{ margin:"30px" , color:"blue"}}>{resedi.msg}</p> <Button style={{ margin:"30px"}} variant="contained" onClick={ ()=> {window.location.href = '/categories'}}>retour</Button></> : null}

      {/* )  } */}
    </>
  );
};

export default EditCategorie;
