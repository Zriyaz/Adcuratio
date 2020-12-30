import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Message from "./Message"
import Loader from "./Loader"
import {getProfiles} from "../actions/userActions"
import axios from "axios"

const Profiles = () => {

   const [userProfiles, setUserProfiles] = useState()
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')

    useEffect(()=>{
        setLoading(true)
        fetch('https://reqres.in/api/users?page=2')
        .then((response)=>response.json())
        .then((data)=>{
            setUserProfiles(data)
        })
    },[])
    console.log(userProfiles)
    return (
        <div>
          {
              loading ? <h1></h1> : (
                  
              ) 
          }
        </div>
    )
}

export default Profiles
