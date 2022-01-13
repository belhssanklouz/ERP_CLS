import axios from "axios"
import {GET_ALL_USERS,GET_ALL_USERS_SUCC,ADD_USER_SUCC,ADD_USER,
    ADD_PRODUCT,ADD_PRODUCT_SUCC,GET_ALL_PRODUCT,GET_ALL_PRODUCT_SUCC,ADD_PRODUCT_FAIL,
    DELETE_PRODUCT,DELETE_PRODUCT_SUCC,DELETE_PRODUCT_FAIL,
    ADD_CATEGORY,ADD_CATEGORY_SUCC,ADD_CATEGORY_FAIL,GET_ALL_CATEGORY,GET_ALL_CATEGORY_SUCC,
    DELETE_CATEGORY, DELETE_CATEGORY_SUCC,DELETE_CATEGORY_FAIL,
    GET_ALL_CLIENT,GET_ALL_CLIENT_SUCC,GET_ALL_CLIENT_FAIL,
    ADD_CLIENT,ADD_CLIENT_SUCC,ADD_CLIENT_FAIL,
    EDIT_CATEGORY,EDIT_CATEGORY_SUCC,EDIT_CATEGORY_FAIL,
     EDIT_PRODUCT,EDIT_PRODUCT_SUCC,EDIT_PRODUCT_FAIL} from '../types/actionsTyps'


export const getAllUseres=()=>async(dispatch)=>{
    await dispatch({type:GET_ALL_USERS})
    try {
        const alldata = await axios('http://192.168.1.219:8888/api/v1/user/getallusers')
        dispatch({type:GET_ALL_USERS_SUCC,payload:alldata.data})
    } catch (error) {
        console.log('object',error)
    }
}

export const addUser = (newUser) =>async (dispatch)=>{
    await dispatch({type:ADD_USER})

    try {
        const postResult  =await  axios.post('http://192.168.1.219:8888/api/v1/user/adduser',newUser);
        dispatch({type:ADD_USER_SUCC,payload:postResult.data})
    } catch (error) {
        console.log('redux error',error)
    }
}
//product
export const getAllProducts = () => async(dispatch)=>{
    await dispatch({type:GET_ALL_PRODUCT})
    try {
        const allProducts = await axios("http://192.168.1.219:8888/api/v1/product/getallproduct");
        dispatch({type:GET_ALL_PRODUCT_SUCC,payload:allProducts.data})
        
    } catch (error) {
        console.log('get all products error',error)
    }
}

export const addProducts = (newProduct) => async (dispatch) =>{
    await dispatch ({type:ADD_PRODUCT})
    try {
        const addProducts = await axios.post('http://192.168.1.219:8888/api/v1/product/addproduct',newProduct);
        const allProducts = await axios("http://192.168.1.219:8888/api/v1/product/getallproduct");

        dispatch({type:ADD_PRODUCT_SUCC,payload:allProducts.data})
        
    } catch (error) {
        await dispatch ({type:ADD_PRODUCT_FAIL,payload:error.response.data})

        console.log(error)
    }
}

export const editProduct = (editProd) => async (dispatch) =>{
    await dispatch ({type:EDIT_PRODUCT})
    try {
        const editprod = await axios.patch(`http://192.168.1.219:8888/api/v1/product/update/${editProd._id.id}`,{name:editProd.name,price:editProd.price,description:editProd.description,isservice:editProd.isservice,categories:editProd.categories});

        dispatch({type:EDIT_PRODUCT_SUCC,payload:editprod.data})
        
    } catch (error) {
        dispatch({type:EDIT_PRODUCT_FAIL,payload:error.response})
    }
}

export const deleteProduct = (idProd) => async(dispatch)=>{
    await dispatch ({type:DELETE_PRODUCT})
    try {
        await axios.delete(`http://192.168.1.219:8888/api/v1/product/delete/${idProd}`);
        const allProd = await axios("http://192.168.1.219:8888/api/v1/product/getallproduct");
        dispatch({type:DELETE_PRODUCT_SUCC,payload:allProd.data})

    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAIL,payload:error.data})

    }
}


//category

export const getAllCategorys = () => async(dispatch)=>{
    await dispatch({type:GET_ALL_CATEGORY})
    try {
        const allCategorys = await axios("http://192.168.1.219:8888/api/v1/category/getallcategory");
        dispatch({type:GET_ALL_CATEGORY_SUCC,payload:allCategorys.data})
        
    } catch (error) {
        console.log('get all Categorys error',error)
    }
}

export const addCategories = (newCategory) => async (dispatch) =>{
    await dispatch ({type:ADD_CATEGORY})
    try {
        const addCategory = await axios.post('http://192.168.1.219:8888/api/v1/category/addcategory',newCategory);
        //const allCategorys = await axios("http://192.168.1.219:8888/api/v1/category/getallcategory");
        dispatch({type:ADD_CATEGORY_SUCC,payload:addCategory.data})
        
    } catch (error) {
       dispatch({type:ADD_CATEGORY_FAIL,payload:error.response.data})
    }
}

export const editCategories = (editCategory) => async (dispatch) =>{
    await dispatch ({type:EDIT_CATEGORY})
    try {
        const editCat = await axios.patch(`http://192.168.1.219:8888/api/v1/category/update/${editCategory._id.id}`,{name:editCategory.name,description:editCategory.description});
        const allCategorys = await axios("http://192.168.1.219:8888/api/v1/category/getallcategory");

        dispatch({type:EDIT_CATEGORY_SUCC,payload:editCat.data})
        
    } catch (error) {
        dispatch({type:EDIT_CATEGORY_FAIL,payload:error.response.data})
    }
}

export const deleteCategory = (idCat) => async(dispatch)=>{
    await dispatch ({type:DELETE_CATEGORY})
    try {
        await axios.delete(`http://192.168.1.219:8888/api/v1/category/delete/${idCat}`);
        const allCategorys = await axios("http://192.168.1.219:8888/api/v1/category/getallcategory");
        dispatch({type:DELETE_CATEGORY_SUCC,payload:allCategorys.data})

    } catch (error) {
        dispatch({type:DELETE_CATEGORY_FAIL,payload:error.data})

    }
}

// Client

export const getAllClient=()=>async(dispatch)=>{
    await dispatch({type:GET_ALL_CLIENT})
    try {
        const allData = await axios('http://192.168.1.219:8888/api/v1/client/getallclient')
        dispatch({type:GET_ALL_CLIENT_SUCC,payload:allData.data})
    } catch (error) {
        dispatch({type:GET_ALL_CLIENT_FAIL,payload:error.data})
        console.log('client',error)
    }
}

export const addClient = (newClient) => async (dispatch) =>{
    await dispatch ({type:ADD_CLIENT})
    try {
        const addClient = await axios.post('http://192.168.1.219:8888/api/v1/client/addclient',newClient);
        const allData = await axios('http://192.168.1.219:8888/api/v1/client/getallclient')
        dispatch({type:ADD_CLIENT_SUCC,payload:allData.data})
        
    } catch (error) {
        await dispatch ({type:ADD_CLIENT_FAIL,payload:error.response.data})

        console.log(error)
    }
}

