import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import userReducer from './userReducer';
import ProductReducer from "./ProductReducer";
import categoryReducer from './categoryReducer';
import clientReducer from './ClientReducer';
import companyReducer from './companyReducer';
const rootReducer = combineReducers({ThemeReducer,userReducer,ProductReducer,categoryReducer,clientReducer,companyReducer})

export default rootReducer