import {GET_ALL_CLIENT,GET_ALL_CLIENT_SUCC,GET_ALL_CLIENT_FAIL} from '../types/actionsTyps';

const initialState={
    loading:false,
    client:null,
    error:null
}

const clientReducer = (state=initialState,{type,payload}) => {
    switch (type){
        case GET_ALL_CLIENT:
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
        default:
            return state;
    }
}

export default clientReducer;