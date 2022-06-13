import React, { FC, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAuth } from '../redux/actions/actions'
import "../components/css/home.css"

type Props = {}

const Login: FC = (props: Props) => {
    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const userData = useSelector((state: any) => state)
    const dispatch = useDispatch()

    // console.log(userData);

    const handleSubmit = () => {
        const data = {
            username: username,
            password: password
        }
        dispatch(loginAuth(data))
    }

    if (userData.authUser === "user"){
        navigate("/")
    }


    return (
        <div>
            <Container className='w-50'
                style={{
                    background: "linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b)",
                    padding: "50px",
                    marginTop: "5%",
                    borderRadius: "10px",
                    fontFamily: "cursive",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}>
                <h1>Please Login</h1>
                <Form.Label className='mt-2 h5 text-light' size="lg">Username</Form.Label>
                <Form.Control type="text" placeholder='Enter Username' defaultValue={username} onChange={(e) => setUserName(e.target.value)} />
                <Form.Label className='mt-2 h5 text-light' size="lg">Password</Form.Label>
                <Form.Control type="password" placeholder='Enter Password' defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='d-grid gap-2 mt-3'>
                    <Button className='button' style={{ borderRadius: "10px" }} size='lg' onClick={() => handleSubmit()}>Login</Button>
                    <Button className='button' style={{ borderRadius: "10px",background:"darkorchid" }} size='lg' onClick={() =>{
                         setUserName("guest@test.com");
                         setPassword("guest");
                    }}>Click to Guest Login</Button>
                </div>
            </Container>
        </div>
    )
}

export default Login;