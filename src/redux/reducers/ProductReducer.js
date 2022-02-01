import {ADD_PRODUCT,ADD_PRODUCT_SUCC,GET_ALL_PRODUCT,GET_ALL_PRODUCT_SUCC,GET_ALL_PRODUCT_FAIL,
    DELETE_PRODUCT,DELETE_PRODUCT_SUCC,DELETE_PRODUCT_FAIL,ADD_PRODUCT_FAIL,
    EDIT_PRODUCT,EDIT_PRODUCT_SUCC,EDIT_PRODUCT_FAIL,
    GET_PROD_BY_NAME,GET_PROD_BY_NAME_SUCC,GET_PROD_BY_NAME_FAIL} from '../types/actionsTyps';

const initialState ={
    loading:false,
    error:null,
    products:null,
    responseAdd:null,
    responseEdit:null,
    selected:[]

}

const ProductReducer = (state=initialState,{type,payload,qnt}) =>{
    switch(type){
        case GET_ALL_PRODUCT:
        case EDIT_PRODUCT:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_PRODUCT_SUCC:
            return{
                ...state,
                loading:false,
                products:payload
            }
        case EDIT_PRODUCT_SUCC:
            return{
                ...state,
                loading:false,
                responseEdit:payload
            }
        case GET_ALL_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                product:null,
                error:payload
            }
        case EDIT_PRODUCT_FAIL:
            return{
                ...state,
                loading:false,
                product:null,
                responseEdit:payload
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
                    responseAdd:payload
                }
            case ADD_PRODUCT_FAIL:
                return{
                    ...state,
                    loading:false,
                    responseAdd:payload
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
                case GET_PROD_BY_NAME :
                    return{
                        ...state,
                        loading:true
                    }
                case GET_PROD_BY_NAME_SUCC:
                    return {
                        ...state,
                        loading:false,
                        selected:[...state.selected,{prod:payload[0],qnt:qnt}]
                    }
                case GET_PROD_BY_NAME_FAIL:
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