import { combineReducers } from "redux";
import {HomeReducers as home} from '../Routes/Home/Modules/home'

export const makeRootReducer = () => {
    return combineReducers({});
}

export default makeRootReducer;