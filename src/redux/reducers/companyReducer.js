import {GET_ALL_COMPANY,GET_ALL_COMPANY_SUCC,GET_ALL_COMPANY_FAIL,
        EDIT_COMPANY,EDIT_COMPANY_SUCC,EDIT_COMPANY_FAIL} from '../types/actionsTyps'

const initialState = {
    loading:false,
    company:null,
    error:null,
    responseEdit:null
}

const companyReducer = (state = initialState,{type,payload}) => {
    switch(type){
        case GET_ALL_COMPANY:
        case EDIT_COMPANY:
            return{
                ...state,
                loading:true
            }
        case GET_ALL_COMPANY_SUCC:
            return{
                ...state,
                loading:true,
                company:payload
            }
        case 'Companies_Succ':
            return{
                ...state,
                loading:false,
                company:payload
            }
        case GET_ALL_COMPANY_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
        case EDIT_COMPANY_SUCC:
            return{
                ...state,
                loading:false,
                responseEdit:payload
            }
        case EDIT_COMPANY_FAIL:
            return{
                ...state,
                loading:false,
                responseEdit:payload
            }
        default:
            return state
    }
}

export default companyReducer;