import {ADD_CATEGORY,ADD_CATEGORY_SUCC,ADD_CATEGORY_FAIL,GET_ALL_CATEGORY,GET_ALL_CATEGORY_SUCC,GET_ALL_CATEGORY_FAIL,
    DELETE_CATEGORY,DELETE_CATEGORY_SUCC,DELETE_CATEGORY_FAIL,
    EDIT_CATEGORY,EDIT_CATEGORY_SUCC,EDIT_CATEGORY_FAIL} from '../types/actionsTyps';

const initialState ={
    loading:false,
    error:null,
    categories:null,
    responseadd:null,
    responseedit:null,

}

const categoryReducer = (state=initialState,{type,payload}) =>{
    switch (type) {
        case GET_ALL_CATEGORY:
        case DELETE_CATEGORY:
        case EDIT_CATEGORY:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_CATEGORY_SUCC:
            return{
                ...state,
                loading:false,
                categories:payload
            }
        case EDIT_CATEGORY_SUCC:
            return{
                ...state,
                loading:false,
                responseedit:payload
            }    
        case GET_ALL_CATEGORY_FAIL:
        case EDIT_CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                responseedit:payload
            }
        case ADD_CATEGORY:
            return{
                ...state,
                loading:true
            }
        case ADD_CATEGORY_SUCC:
            return{
                ...state,
                loading:false,
                responseadd:payload
            }
        case ADD_CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                responseadd:payload
            }
        case DELETE_CATEGORY_SUCC:
            return{
                ...state,
                loading:false,
                categories:payload
            }
        case DELETE_CATEGORY_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;
    }
}

export default categoryReducer;