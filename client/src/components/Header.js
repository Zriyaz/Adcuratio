import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Navbar, Button, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, withRouter } from 'react-router-dom';
import { logout} from "../actions/userActions"

const Header = ({history}) => {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  
  const logoutHandler = () =>{
    dispatch(logout())
  }
  
    return(
      <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <LinkContainer to="/">
             <Navbar.Brand>Test Work</Navbar.Brand>
            </LinkContainer>
            
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'> 
            <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-home'></i> Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/profiles'>
                <Nav.Link>
                  <i className='fas fa-users mr-1'></i>Users Profile
                </Nav.Link>
              </LinkContainer>
            {
            userInfo ? (
            <>
              <LinkContainer to='/dashborad'>
                <Nav.Link>
                  <i className='fas fa-dashborad'></i> Dashborad
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/dashborad'>
                <Nav.Link onClick={logoutHandler}>
                <i className='mr-1 fas fa-sign-out-alt'></i>
                  Sign Out
                </Nav.Link>
              </LinkContainer>
            </>
            ) : 
            (
            <>
              <LinkContainer to='/register'>
                <Nav.Link>
                  <i className='fas fa-book'></i> Register
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Login
                </Nav.Link>
              </LinkContainer>
            </>
            )
          } 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    )
}
export default withRouter(Header)
