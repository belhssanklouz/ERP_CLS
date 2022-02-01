import axios from "axios"
import {GET_ALL_USERS,GET_ALL_USERS_SUCC,
        ADD_USER_SUCC,ADD_USER,
        EDIT_USER, EDIT_USER_SUCC, EDIT_USER_FAIL,
        DELETE_USER,DELETE_USER_SUCC,DELETE_USER_FAIL,

        ADD_PRODUCT,ADD_PRODUCT_SUCC,
        GET_PROD_BY_NAME,GET_PROD_BY_NAME_SUCC,GET_PROD_BY_NAME_FAIL,
        GET_ALL_PRODUCT,GET_ALL_PRODUCT_SUCC,ADD_PRODUCT_FAIL,
        DELETE_PRODUCT,DELETE_PRODUCT_SUCC,DELETE_PRODUCT_FAIL,
        ADD_CATEGORY,ADD_CATEGORY_SUCC,ADD_CATEGORY_FAIL,GET_ALL_CATEGORY,GET_ALL_CATEGORY_SUCC,
        DELETE_CATEGORY, DELETE_CATEGORY_SUCC,DELETE_CATEGORY_FAIL,

        GET_ALL_CLIENT,GET_ALL_CLIENT_SUCC,GET_ALL_CLIENT_FAIL,
        ADD_CLIENT,ADD_CLIENT_SUCC,ADD_CLIENT_FAIL,
        EDIT_CLIENT,EDIT_CLIENT_SUCC,EDIT_CLIENT_FAIL,
        DELETE_CLIENT,DELETE_CLIENT_SUCC,DELETE_CLIENT_FAIL,

        EDIT_CATEGORY,EDIT_CATEGORY_SUCC,EDIT_CATEGORY_FAIL,
        EDIT_PRODUCT,EDIT_PRODUCT_SUCC,EDIT_PRODUCT_FAIL,
        GET_ALL_CATEGORY_BI, GET_ALL_CATEGORY_SUCC_BI, GET_ALL_CATEGORY_FAIL, GET_ALL_CATEGORY_FAIL_BI, GET_ALL_COMPANY, GET_ALL_COMPANY_SUCC, GET_ALL_COMPANY_FAIL, EDIT_COMPANY, EDIT_COMPANY_SUCC, EDIT_COMPANY_FAIL,

        GET_ALL_DEVIS,GET_ALL_DEVIS_SUCC,GET_ALL_DEVIS_FAIL,
        ADD_DEVIS,ADD_DEVIS_SUCC,ADD_DEVIS_FAIL,
        EDIT_DEVIS,EDIT_DEVIS_SUCC,EDIT_DEVIS_FAIL,
        DELETE_DEVIS,DELETE_DEVIS_SUCC,DELETE_DEVIS_FAIL, ADD_TEMP_DEVIS,ADD_TEMP_DEVIS_SUCC} from '../types/actionsTyps'


export const getAllUsers=()=>async(dispatch)=>{
    await dispatch({type:GET_ALL_USERS})
    try {
        const alldata = await axios('https://cls-erp.herokuapp.com/api/v1/user/getallusers')
        dispatch({type:GET_ALL_USERS_SUCC,payload:alldata.data})
    } catch (error) {
        console.log('object',error)
    }
}

export const addUser = (newUser) =>async (dispatch)=>{
    await dispatch({type:ADD_USER})

    try {
        const postResult = await axios.post('https://cls-erp.herokuapp.com/api/v1/user/adduser',newUser);
        dispatch({type:ADD_USER_SUCC,payload:postResult.data})

    } catch (error) {
        dispatch({type:'ADD_USER_FAIL',payload:error.response.data})
    }
}

export const editUsers = (user) => async(dispatch)=>{
    await dispatch({type:EDIT_USER})
    try {
        const editUser = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/user/update/${user.id}`,user)
        dispatch({type:EDIT_USER_SUCC,payload:editUser.data.msg})
    } catch (error) {
        dispatch({type:EDIT_USER_FAIL,payload:error.response})
    }
}

export const deleteUser = (idUser) => async(dispatch)=>{
    await dispatch ({type:DELETE_USER})
    try {
        await axios.delete(`https://cls-erp.herokuapp.com/api/v1/user/delete/${idUser}`);
        const allUsers = await axios("https://cls-erp.herokuapp.com/api/v1/user/getallusers");
        dispatch({type:DELETE_USER_SUCC,payload:allUsers.data})

    } catch (error) {
        dispatch({type:DELETE_USER_FAIL,payload:error.response})

    }
}


//product
export const getAllProducts = () => async(dispatch)=>{
    await dispatch({type:GET_ALL_PRODUCT})
    try {
        const allProducts = await axios("https://cls-erp.herokuapp.com/api/v1/product/getallproduct");
        dispatch({type:GET_ALL_PRODUCT_SUCC,payload:allProducts.data})
        
    } catch (error) {
        console.log('get all products error',error)
    }
}

export const getProdByName = (prodName,qnt) => async (dispatch) =>{
    await dispatch ({type:GET_PROD_BY_NAME})
    try {
        const prod = await axios(`https://cls-erp.herokuapp.com/api/v1/product/getprodbyname/${prodName}`);
        dispatch({type:GET_PROD_BY_NAME_SUCC,payload:prod.data,qnt:qnt})
        
    } catch (error) {
        await dispatch ({type:GET_PROD_BY_NAME_FAIL,payload:error})

    }
}


export const addProducts = (newProduct) => async (dispatch) =>{
    await dispatch ({type:ADD_PRODUCT})
    try {
        const addProducts = await axios.post('https://cls-erp.herokuapp.com/api/v1/product/addproduct',newProduct);
        const allProducts = await axios("https://cls-erp.herokuapp.com/api/v1/product/getallproduct");

        dispatch({type:ADD_PRODUCT_SUCC,payload:addProducts.data})
        
    } catch (error) {
        await dispatch ({type:ADD_PRODUCT_FAIL,payload:error.response.data})

        console.log(error)
    }
}

export const editProduct = (editProd) => async (dispatch) =>{
    await dispatch ({type:EDIT_PRODUCT})
    try {
        const editprod = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/product/update/${editProd._id.id}`,{name:editProd.name,price:editProd.price,description:editProd.description,isservice:editProd.isservice,categories:editProd.categories});

        dispatch({type:EDIT_PRODUCT_SUCC,payload:editprod.data})
        
    } catch (error) {
        dispatch({type:EDIT_PRODUCT_FAIL,payload:error.response})
    }
}

export const deleteProduct = (idProd) => async(dispatch)=>{
    await dispatch ({type:DELETE_PRODUCT})
    try {
        await axios.delete(`https://cls-erp.herokuapp.com/api/v1/product/delete/${idProd}`);
        const allProd = await axios("https://cls-erp.herokuapp.com/api/v1/product/getallproduct");
        dispatch({type:DELETE_PRODUCT_SUCC,payload:allProd.data})

    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAIL,payload:error.data})

    }
}


//category

export const getAllCategorys = () => async(dispatch)=>{
    await dispatch({type:GET_ALL_CATEGORY})
    try {
        const allCategorys = await axios("https://cls-erp.herokuapp.com/api/v1/category/getallcategory");
        dispatch({type:GET_ALL_CATEGORY_SUCC,payload:allCategorys.data})
        
    } catch (error) {
        console.log('get all Categorys error',error)
    }
}
export const getCatByID = (idcat) => async(dispatch)=>{
    await dispatch({type:GET_ALL_CATEGORY_BI})
    try {
        const allCategorys = await axios(`https://cls-erp.herokuapp.com/api/v1/category/getcategorybyid/${idcat}`);
        dispatch({type:GET_ALL_CATEGORY_SUCC_BI,payload:allCategorys.data})
        
    } catch (error) {
        dispatch({type:GET_ALL_CATEGORY_FAIL_BI})
        console.log('get Categorys error',error.response.data)
    }
}

export const addCategories = (newCategory) => async (dispatch) =>{
    await dispatch ({type:ADD_CATEGORY})
    try {
        const addCategory = await axios.post('https://cls-erp.herokuapp.com/api/v1/category/addcategory',newCategory);
        dispatch({type:ADD_CATEGORY_SUCC,payload:addCategory.data})
        
    } catch (error) {
       dispatch({type:ADD_CATEGORY_FAIL,payload:error.response.data})
    }
}

export const editCategories = (editCategory) => async (dispatch) =>{
    await dispatch ({type:EDIT_CATEGORY})
    console.log(editCategory)
    try {
        const editCat = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/category/update/${editCategory._id}`,{name:editCategory.name,description:editCategory.description});

        dispatch({type:EDIT_CATEGORY_SUCC,payload:editCat.data})
        
    } catch (error) {
        dispatch({type:EDIT_CATEGORY_FAIL,payload:error.response})
    }
}

export const deleteCategory = (idCat) => async(dispatch)=>{
    await dispatch ({type:DELETE_CATEGORY})
    try {
        await axios.delete(`https://cls-erp.herokuapp.com/api/v1/category/delete/${idCat}`);
        const allCategorys = await axios("https://cls-erp.herokuapp.com/api/v1/category/getallcategory");
        dispatch({type:DELETE_CATEGORY_SUCC,payload:allCategorys.data})

    } catch (error) {
        dispatch({type:DELETE_CATEGORY_FAIL,payload:error.data})

    }
}

// Client

export const getAllClient=()=>async(dispatch)=>{
    await dispatch({type:GET_ALL_CLIENT})
    try {
        const allData = await axios('https://cls-erp.herokuapp.com/api/v1/client/getallclient')
        dispatch({type:GET_ALL_CLIENT_SUCC,payload:allData.data})
    } catch (error) {
        dispatch({type:GET_ALL_CLIENT_FAIL,payload:error.data})
        console.log('client',error)
    }
}

export const addClient = (newClient) => async (dispatch) =>{
    await dispatch ({type:ADD_CLIENT})
    try {
        const addClient = await axios.post('https://cls-erp.herokuapp.com/api/v1/client/addclient',newClient);
        dispatch({type:ADD_CLIENT_SUCC,payload:addClient.data})
        
    } catch (error) {
        await dispatch ({type:ADD_CLIENT_FAIL,payload:error.response.data})
    }
}

export const editClients = (editClient) => async (dispatch) =>{
    await dispatch ({type:EDIT_CLIENT})
    try {
        const editCat = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/client/update/${editClient._id}`,
        {name:editClient.name,email:editClient.email,phoneNumber:editClient.phoneNumber,
        adress:{adressLine:editClient.adressLine,city:editClient.city,zipCode:editClient.zipCode},
        raisonSocial:editClient.raisonSocial,secteurActivite:editClient.secteurActivite,commentaire:editClient.commentaire});
        dispatch({type:EDIT_CLIENT_SUCC,payload:editCat.data})
        
    } catch (error) {
        dispatch({type:EDIT_CLIENT_FAIL,payload:error.response.data})
    }
}


export const deleteClient = (idCli) => async(dispatch) => {
    dispatch({type:DELETE_CLIENT})
    try {
        await axios.delete(`https://cls-erp.herokuapp.com/api/v1/client/delete/${idCli}`)
        const allData = await axios('https://cls-erp.herokuapp.com/api/v1/client/getallclient')
        dispatch({type:DELETE_CLIENT_SUCC,payload:allData.data})
        
    } catch (error) {
        dispatch({type:DELETE_CLIENT_FAIL,payload:error.response})
    }
}

// Company

export const getAllCompanies = () => async(dispatch) =>{
    await dispatch({type:GET_ALL_COMPANY})
    try {
        const allCompanies = await axios('https://cls-erp.herokuapp.com/api/v1/company/getallcompany');
        dispatch({type:GET_ALL_COMPANY_SUCC,payload:allCompanies.data})
        dispatch({type:'Companies_Succ',payload:allCompanies.data})
    } catch (error) {
        dispatch({type:GET_ALL_COMPANY_FAIL,payload:error.response})
    }
}

export const editCompany = (edited) => async(dispatch) => {
    await dispatch({type:EDIT_COMPANY})
    try {
        const edit = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/company/update/${edited.id}`,edited);
        const companies = await axios('https://cls-erp.herokuapp.com/api/v1/company/getallcompany');
        dispatch({type:EDIT_COMPANY_SUCC,payload:edit.data,data:companies.data})
    } catch (error) {
        dispatch({type:EDIT_COMPANY_FAIL,payload:error})
    }
} 

//Devis 

export const getAllDevis = () => async(dispatch) =>{
    await dispatch({type:GET_ALL_DEVIS})
    try {
        const allQuotes = await axios('https://cls-erp.herokuapp.com/api/v1/devis/getalldevis');
        dispatch({type:GET_ALL_DEVIS_SUCC,payload:allQuotes.data})
    } catch (error) {
        dispatch({type:GET_ALL_DEVIS_FAIL,payload:error.response})
    }
}

export const addDevis = (newDevis,prod) => async (dispatch) =>{
    await dispatch ({type:ADD_DEVIS})
    console.log(prod)
    try {
        const addDevis = await axios.post('https://cls-erp.herokuapp.com/api/v1/client/addclient',{numerodevis:newDevis.numerodevis,datevalidite:newDevis.datevalidite,client:newDevis.client,listproduit:prod});
        dispatch({type:ADD_DEVIS_SUCC,payload:addDevis.data})
        
    } catch (error) {
        await dispatch ({type:ADD_DEVIS_FAIL,payload:error.response.data})
    }
}

export const editDevis = (editDevis) => async (dispatch) =>{
    await dispatch ({type:EDIT_DEVIS})
    try {
        const editCat = await axios.patch(`https://cls-erp.herokuapp.com/api/v1/DEVIS/update/${editDevis._id}`,editDevis);
        dispatch({type:EDIT_DEVIS_SUCC,payload:editCat.data})
        
    } catch (error) {
        dispatch({type:EDIT_DEVIS_FAIL,payload:error.response.data})
    }
}


export const deleteDevis = (idDevis) => async(dispatch) => {
    dispatch({type:DELETE_DEVIS})
    try {
        await axios.delete(`https://cls-erp.herokuapp.com/api/v1/devis/delete/${idDevis}`)
        const allData = await axios('https://cls-erp.herokuapp.com/api/v1/devis/getalldevis')
        dispatch({type:DELETE_DEVIS_SUCC,payload:allData.data})
        
    } catch (error) {
        dispatch({type:DELETE_DEVIS_FAIL,payload:error.response})
    }
}

export const addtempDevis = (ob) => async (dispatch)=>{
     await dispatch({type :ADD_TEMP_DEVIS})
    try {
       await  dispatch({type: ADD_TEMP_DEVIS_SUCC , payload : ob})
    } catch (error) {
       await  console.log('tetetetetet errooor temp')
    }
}