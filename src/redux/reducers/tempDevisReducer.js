import {ADD_TEMP_DEVIS , ADD_TEMP_DEVIS_SUCC , ADD_TEMP_DEVIS_FAIL} from "../types/actionsTyps"

const initialState ={
    loading:false,
    error:null,
    tempdevis:null,
    
}

const tempDevisReducer = (state = initialState , {type, payload}) =>{


    switch (type) {
        case ADD_TEMP_DEVIS:
            return{
                ...state,
                loading:true
            }
        case ADD_TEMP_DEVIS_SUCC : 
        return{
            ...state,
            loading:false,
            tempdevis : payload,
        }
        case ADD_TEMP_DEVIS_FAIL:
            return{
                ...state,
                loading:false,
                error:'errrror temp'
            }
      
    
        default:
            return state
    }
}


export default tempDevisReducer; 