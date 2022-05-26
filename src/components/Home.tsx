import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { SiConvertio } from "react-icons/si"
import Header from './Header'
import { useNavigate } from 'react-router-dom'
//mui
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
//components
import Length from './units/Length'
import WaightUnit from './units/WaightUnit'
import "../components/css/home.css"
import AreaUnit from './units/AreaUnit'

type Props = {}

const Home = (props: Props) => {

    const [value, setValue] = React.useState('1');
    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const validUser = localStorage.getItem("user")
    // console.log(validUser);
    useEffect(() => {
        if (!validUser) {
            navigate("/login")
        }
    }, [validUser])

    return (
        <div style={{ backgroundImage: "url('../public/151.jpg')" }}>
            <Header />
            <Container className='w-50 mt-2'
                style={{
                    background: "linear-gradient(to right, #36d1dc, #5b86e5)",
                    padding: "50px",
                    borderRadius: "10px",
                    fontFamily: "cursive",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}>
                <div style={{ textAlign: "center", marginTop: "-30px" }}>
                    <SiConvertio className='button2' style={{ fontSize: "60px" }} />
                </div>
                <Box sx={{ width: '100%', typography: 'body1', fontFamily: "cursive" }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="Waight" value="1" style={{ color: "white", fontFamily: "cursive",margin:"auto" }} />
                                <Tab label="Length" value="2" style={{ color: "white", fontFamily: "cursive",margin:"auto"  }} />
                                <Tab label="Area" value="3" style={{ color: "white", fontFamily: "cursive",margin:"auto"  }} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <WaightUnit />
                        </TabPanel>
                        <TabPanel value="2">
                            <Length />
                        </TabPanel>
                        <TabPanel value="3">
                            <AreaUnit/>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </div>
    )
}

export default Home