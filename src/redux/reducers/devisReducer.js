import {GET_ALL_DEVIS,GET_ALL_DEVIS_SUCC,GET_ALL_DEVIS_FAIL,
        ADD_DEVIS,ADD_DEVIS_SUCC,ADD_DEVIS_FAIL,
        EDIT_DEVIS,EDIT_DEVIS_SUCC,EDIT_DEVIS_FAIL,
        DELETE_DEVIS,DELETE_DEVIS_SUCC,DELETE_DEVIS_FAIL} from '../types/actionsTyps'

const initialState = {
    loading:false,
    devis:null,
    responseAdd:null,
    responseEdit:null,
    error:null
}
const devisReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_ALL_DEVIS:
        case ADD_DEVIS:
        case EDIT_DEVIS:
        case DELETE_DEVIS:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_DEVIS_SUCC:
            return{
                ...state,
                loading:false,
                devis:payload
            }
        case GET_ALL_DEVIS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case ADD_DEVIS_SUCC:
            return{
                ...state,
                loading:false,
                responseAdd:payload
            }
        case ADD_DEVIS_FAIL:
            return{
                ...state,
                loading:false,
                responseAdd:payload
            }
        case EDIT_DEVIS_SUCC:
            return{
                ...state,
                loading:false,
                responseEdit:payload
            }
        case EDIT_DEVIS_FAIL:
            return{
                ...state,
                loading:false,
                responseEdit:payload
            }
        case DELETE_DEVIS_SUCC:
            return{
                ...state,
                loading:false,
                devis:payload
            }
        case DELETE_DEVIS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
        default:
            return state;

        
    }
}
export default devisReducer;