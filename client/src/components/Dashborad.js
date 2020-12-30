import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Col} from "react-bootstrap"

const Dashborad = ({history}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(()=>{
        if(userInfo===null){
           history.push("/")
        }
    },[history, userInfo])

    console.log(history)
    return (
        <React.Fragment>
                <Row>
                  <Col md={12} className="mt-5">
                    <h2 className="text-center" >{`Welcome Mr ${userInfo.name}`}</h2>
                    <p className="text-center">Your Email: {userInfo.email}</p>  
                  </Col>
                </Row>
        </React.Fragment>
    )
}

export default Dashborad
