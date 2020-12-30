import {
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_REGISTER_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    PROFILES_REQUEST,
    PROFILES_REQUEST_FAIL,
    PROFILES_REQUEST_SUCCESS
} from "../constants/userConstants"

export const userRegister = (state = {}, action)=>{

    switch(action.type){
        case  USER_REGISTER_REQUEST:
          return { loading: true }
        case USER_REGISTER_SUCCESS:
           return { loading: false, userInfo: action.payload}
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default: 
            return state
    }
}


export const userLogin = (state = {}, action)=>{

    switch(action.type){
        case  USER_LOGIN_REQUEST:
          return { loading: true }
        case USER_LOGIN_SUCCESS:
           return { loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default: 
            return state
    }

}


export const profiles = (state = {}, action)=>{

    switch(action.type){
        case  PROFILES_REQUEST:
          return { loading: true }
        case PROFILES_REQUEST_SUCCESS:
           return { loading: false, profiles: action.payload}
        case PROFILES_REQUEST_FAIL:
            return {loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default: 
            return state
    }

}
