import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant='dark'>
          <Container style={{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
            <Navbar.Brand href="#home" className='m-auto h1' style={{fontFamily:"cursive"}}>
              Welcome to Unit Converter
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header