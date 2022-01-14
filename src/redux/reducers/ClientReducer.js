import {GET_ALL_CLIENT,GET_ALL_CLIENT_SUCC,GET_ALL_CLIENT_FAIL,
        ADD_CLIENT,ADD_CLIENT_SUCC,ADD_CLIENT_FAIL,
        EDIT_CLIENT, EDIT_CLIENT_SUCC, EDIT_CLIENT_FAIL,
        DELETE_CLIENT,DELETE_CLIENT_SUCC,DELETE_CLIENT_FAIL} from '../types/actionsTyps';

const initialState={
    loading:false,
    client:null,
    error:null,
    responseAdd:null,
    responseEdit:null
}

const clientReducer = (state=initialState,{type,payload}) => {
    switch (type){
        case GET_ALL_CLIENT:
        case DELETE_CLIENT:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_CLIENT_SUCC:
            return{
                ...state,
                loading:false,
                client:payload

            }
        case GET_ALL_CLIENT_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
            case ADD_CLIENT:{
                return{
                    ...state,
                    loading:true,
                }
            }
            case ADD_CLIENT_SUCC:{
                return{
                    ...state,
                    loading:false,
                    responseAdd:payload
                }
            }
            case ADD_CLIENT_FAIL:{
                return{
                    ...state,
                    loading:false,
                    responseAdd:payload
                }
            }
            case EDIT_CLIENT:
                return{
                    ...state,
                    loading:true
                }
            case EDIT_CLIENT_SUCC:
                return{
                    ...state,
                    loading:false,
                    responseEdit:payload
                }
            case EDIT_CLIENT_FAIL:
                return{
                    ...state,
                    loading:false,
                    responseEdit:payload
                }
                case DELETE_CLIENT_SUCC:
                    return{
                        ...state,
                        loading:false,
                        client:payload
                    }
                case DELETE_CLIENT_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:payload
                    }
        default:
            return state;
    }
}

export default clientReducer;