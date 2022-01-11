import { GET_ALL_USERS, GET_ALL_USERS_SUCC, GET_ALL_USERS_FAIL,ADD_USER_SUCC,ADD_USER} from "../types/actionsTyps";


const initialState={
    loading:false,
    errors:null,
    users:null,
    isAuth:false
}


const userReducer = (state = initialState , {type,payload}) =>{

        switch (type) {
            case GET_ALL_USERS:
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
                    users:payload
                }
        
            default:
                return state;
               
        }
}


export default userReducer;