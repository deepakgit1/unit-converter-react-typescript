import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "../components/css/home.css"

type Props = {
    setUser:React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({setUser}: Props) => {
    return (
        <div>
            <Container className='w-50 mt-2'
                style={{
                    background: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)",
                    padding: "50px",
                    borderRadius: "10px",
                    fontFamily: "cursive",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}>
                    <h1>Please Login</h1>
                <Form.Label className='mt-2 h5 text-light' size="lg">Username</Form.Label>
                <Form.Control type="text" placeholder='Enter Username' />
                <Form.Label className='mt-2 h5 text-light' size="lg">Password</Form.Label>
                <Form.Control type="password" placeholder='Enter Username' />
                <div className='d-grid gap-2 mt-3'>
                    <Button className='button' style={{borderRadius:"10px"}} size='lg' onClick={()=>setUser(true)}>Login</Button>
                </div>
            </Container>
        </div>
    )
}

export default Login