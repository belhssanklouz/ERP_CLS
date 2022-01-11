import {ADD_PRODUCT,ADD_PRODUCT_SUCC,GET_ALL_PRODUCT,GET_ALL_PRODUCT_SUCC,GET_ALL_PRODUCT_FAIL,
    DELETE_PRODUCT,DELETE_PRODUCT_SUCC,DELETE_PRODUCT_FAIL,ADD_PRODUCT_FAIL,
    EDIT_PRODUCT,EDIT_PRODUCT_SUCC,EDIT_PRODUCT_FAIL} from '../types/actionsTyps';

const initialState ={
    loading:false,
    error:null,
    products:null
}

const ProductReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case GET_ALL_PRODUCT:
        case EDIT_PRODUCT:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_PRODUCT_SUCC:
        case EDIT_PRODUCT_SUCC:
            return{
                ...state,
                loading:false,
                products:payload
            }
        case GET_ALL_PRODUCT_FAIL:
        case EDIT_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                product:null,
                error:payload
            }
            case ADD_PRODUCT:
                return{
                    ...state,
                    loading:true
                }
            case ADD_PRODUCT_SUCC:
                return{
                    ...state,
                    loading:false,
                    products:payload
                }
            case ADD_PRODUCT_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:payload
                }
            case DELETE_PRODUCT:
                return{
                    ...state,
                    loading:true
                }
            case DELETE_PRODUCT_SUCC:
                return{
                    ...state,
                    loading:false,
                    products:payload
                }
                case DELETE_PRODUCT_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:payload
                    }
            default :
            return state;
    }
}

export default ProductReducer;