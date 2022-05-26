import React from 'react'
import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors';
import { Button, Container, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./css/header.css"

type Props = {}

const Header = ({ }: Props) => {
  const navigate = useNavigate()
    const handleLogout=()=>{
      localStorage.clear()
      navigate("/login")
    }
    
  return (
    <div>
      <>
        <Navbar className='header' style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
          <Container >
            <Avatar  sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
            <Navbar.Brand href="#home" className='m-auto h1 text-dark' style={{ fontFamily: "cursive" }}>
              Welcome to Unit Converter
            </Navbar.Brand>
          <Button variant="outline-dark" onClick={handleLogout} >Logout</Button>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header