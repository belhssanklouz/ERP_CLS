import { GET_ALL_USERS, GET_ALL_USERS_SUCC, GET_ALL_USERS_FAIL,
    ADD_USER_SUCC,ADD_USER,
    EDIT_USER,EDIT_USER_SUCC,EDIT_USER_FAIL,
    DELETE_USER,DELETE_USER_SUCC,DELETE_USER_FAIL} from "../types/actionsTyps";


const initialState={
    loading:false,
    errors:null,
    users:null,
    isAuth:false,
    responseAdd:null,
    responseEdit:null
}


const userReducer = (state = initialState , {type,payload}) =>{

        switch (type) {
            case GET_ALL_USERS:
            case EDIT_USER:
            case DELETE_USER:
                return{
                    ...state,
                    loading:true
                }

            case GET_ALL_USERS_SUCC:
                return {
                    ...state,
                    loading:false,
                    users:payload
                } 
            case GET_ALL_USERS_FAIL:
                return {
                    ...state,
                    loading:false,
                    users:null,
                    errors:payload
                } 

            case ADD_USER:
                return{
                    ...state,
                    loading:true,
                }
            case ADD_USER_SUCC:
                return{
                    ...state,
                    loading:false,
                    responseAdd:payload
                }
            case 'ADD_USER_FAIL':
                return {
                    ...state,
                    loading:false,
                    responseAdd:payload
                }
            case EDIT_USER_SUCC:
                return {
                    ...state,
                    loading:false,
                    responseEdit:payload
                }
            case EDIT_USER_FAIL:
                return{
                    ...state,
                    loading:false,
                    responseEdit:payload
                }
            case DELETE_USER_SUCC:
                return{
                    ...state,
                    loading:false,
                    users:payload
                }
            case DELETE_USER_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:payload
                }
            default:
                return state;
               
        }
}


export default userReducer;