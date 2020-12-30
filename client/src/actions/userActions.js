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

import axios from "axios"
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  
  export const logout = () => async (dispatch) => {
        localStorage.removeItem('userInfo')
        dispatch({type: USER_LOGOUT})
  }
  
  export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        '/api/users/register',
        { name, email, password },
        config
      )
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

  export const getProfiles = () => async (dispatch) => {
    try {
      dispatch({
        type: PROFILES_REQUEST,
      })
      const { data } = await axios.get('https://reqres.in/api/users?page=2')
  
      dispatch({
        type: PROFILES_REQUEST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PROFILES_REQUEST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }
  