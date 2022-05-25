import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import "./css/header.css"

type Props = {
  setUser: React.Dispatch<React.SetStateAction<boolean>>
  user: boolean
}

const Header = ({ user, setUser }: Props) => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant='dark' style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" }}>
          <Container >
            <Navbar.Brand href="#home" className='m-auto h1' style={{ fontFamily: "cursive" }}>
              Welcome to Unit Converter
            </Navbar.Brand>
            {
              user ? <Button variant="outline-light" onClick={() => setUser(false)}>Logout</Button> : ""
            }
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header