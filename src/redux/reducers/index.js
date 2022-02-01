import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import userReducer from './userReducer';
import ProductReducer from "./ProductReducer";
import categoryReducer from './categoryReducer';
import clientReducer from './ClientReducer';
import companyReducer from './companyReducer';
import devisReducer from "./devisReducer";
import tempDevisReducer from './tempDevisReducer'
const rootReducer = combineReducers({ThemeReducer,userReducer,ProductReducer,categoryReducer,clientReducer,companyReducer,devisReducer , tempDevisReducer})

export default rootReducer