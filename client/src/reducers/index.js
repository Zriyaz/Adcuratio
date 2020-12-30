import { combineReducers } from 'redux';
import {userRegister, userLogin, profiles} from "./userReducers"

export default combineReducers({
   userRegister : userRegister,
   userLogin: userLogin,
   profiles: profiles
});