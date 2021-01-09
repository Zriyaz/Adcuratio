import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Row, Col,Button, Table} from "react-bootstrap"
import {sampleData} from "../data"

const Dashborad = ({history}) => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(()=>{
          if(!userInfo){
            history.push("/login")
          }
    },[history, userInfo])

    console.log(history)
    return (
        <React.Fragment>
                <Row>
                  <h2 className="ml-3 mt-5">User's Data</h2>
                  <Col md={12} className="mt-3">
                  <Table striped borered hover responsive className="table-sm mt-3">
               <thead>
                   <tr>
                       <th>ID</th>
                       <th>NAME</th>
                       <th>EMAIL</th>
                       <th>PHONE</th>
                       <th>AGE</th>
                       <th>GENDER</th>
                   </tr>
               </thead>
               <tbody>
                   {sampleData.map(user => (
                       <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.phoneNo}</td>
                           <td>{user.age}</td>
                           <td>{user.gender}</td>
                       </tr>
                   ))}
               </tbody>
           </Table> 
                  </Col>
                </Row>
        </React.Fragment>
    )
}

export default Dashborad
