import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"


import FormContainer from './FormContainer'
import {login} from "../actions/userActions"
import {Form, Row, Col, Button} from "react-bootstrap"
import Message from "./Message"
import Loader from "./Loader"

const Login = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(()=>{
        if(userInfo){
            history.push("/dashborad")
        }
    },[history, userInfo])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }



    return (
        <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant="danger">{error}</Message> }
        {loading && <Loader />}   
        <Form onSubmit={submitHandler}>
           <Form.Group required={true} controlId="email">
               <Form.Label>Email Address</Form.Label>
               <Form.Control 
                 type="email" 
                 placeholder="Enter email" 
                 value = {email}
                 onChange = {e=>setEmail(e.target.value)}
                 >
                 </Form.Control>
           </Form.Group>
           <Form.Group required={true} controlId="password">
               <Form.Label>Password</Form.Label>
               <Form.Control 
                 type="password" 
                 placeholder="Enter password" 
                 value = {password}
                 onChange = {e=>setPassword(e.target.value)}
                 >
                 </Form.Control>
           </Form.Group>
           <Button type="submit" variant="primary">Sign In</Button>
        </Form>
        <Row className="py-3">
            <Col>
               New Customer? {' '}
               <Link to="/register">
                   Register
               </Link>
            </Col>
        </Row>
   </FormContainer>
    )
}

export default Login
