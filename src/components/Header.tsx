import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <>
        <Navbar bg="info" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className='m-auto h1'>
               Unit Converter
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header