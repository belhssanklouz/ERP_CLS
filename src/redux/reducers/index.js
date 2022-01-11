import ThemeReducer from "./ThemeReducer";
import { combineReducers } from "redux";
import userReducer from './userReducer';
import ProductReducer from "./ProductReducer";
import categoryReducer from './categoryReducer';
import clientReducer from './ClientReducer';

const rootReducer = combineReducers({ThemeReducer,userReducer,ProductReducer,categoryReducer,clientReducer})

export default rootReducer