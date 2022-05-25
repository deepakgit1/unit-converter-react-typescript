import React, { FormEvent, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "../components/css/home.css"
import {SiConvertio} from "react-icons/si"

type Props = {}

const Home = (props: Props) => {
    const [inputUnit, setInputUnit] = useState<number | string>()
    const [outputUnit, setOutputUnit] = useState<any>()
    const [val, setVal] = useState<any>()
    const [result, setResult] = useState<number>()

    const handleClick = () => {
        // console.log("unit",inputUnit , outputUnit);
        if (inputUnit === "KGS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 1); break;
                case "GMS": setResult(val * 1000); break;
                case "MGS": setResult(val * 1000000); break;
                case "POUND": setResult(val * 2.2046244202); break;
                case "TONNE": setResult(val * 0.001); break;
                default:
                    break;
            }
        } else if (inputUnit === "GMS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.001); break;
                case "GMS": setResult(val * 1); break;
                case "MGS": setResult(val * 1000); break;
                case "POUND": setResult(val * 0.0022046244); break;
                case "TONNE": setResult(val * 0.000001); break;
                default:
                    break;
            }
        } else if (inputUnit === "MGS") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.000001); break;
                case "GMS": setResult(val * 0.001); break;
                case "MGS": setResult(val * 1); break;
                case "POUND": setResult(val * 0.0000022046); break;
                case "TONNE": setResult(val * 0.000000001); break;
                default:
                    break;
            }
        } else if (inputUnit === "POUND") {
            switch (outputUnit) {
                case "KGS": setResult(val * 0.453592); break;
                case "GMS": setResult(val * 453.592); break;
                case "MGS": setResult(val * 453592); break;
                case "POUND": setResult(val * 1); break;
                case "TONNE": setResult(val * 0.000453592); break;
                default:
                    break;
            }
        } else if (inputUnit === "TONNE") {
            switch (outputUnit) {
                case "KGS": setResult(val * 1000); break;
                case "GMS": setResult(val * 1000000); break;
                case "MGS": setResult(val * 1000000000); break;
                case "POUND": setResult(val * 2204.6244202); break;
                case "TONNE": setResult(val * 1); break;
                default:
                    break;
            }
        }
    }


    return (
        <div>
            <Container className='w-50 mt-2' 
            style={{background:"linear-gradient(to right, #36d1dc, #5b86e5)",
            padding:"50px",
            borderRadius:"10px",
            fontFamily:"cursive",
            boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}>
                <div style={{textAlign:"center" ,marginTop:"-30px"}}>
                <SiConvertio className='button2' style={{fontSize:"60px"}}/>
                </div>
                <Form.Label className='mt-2 h3' size="lg">From:</Form.Label>
                <Form.Select size="lg" onChange={(e) => setInputUnit(e.target.value)}>
                    <option>Select unit to convert</option>
                    <option value="KGS">KGS</option>
                    <option value="GMS">Grams</option>
                    <option value="MGS">Miligrams</option>
                    <option value="POUND">Pound</option>
                    <option value="TONNE">Tonne</option>
                </Form.Select>

                <Form.Label className='mt-2 h5 text-light' size="lg">Enter Value</Form.Label>
                <Form.Control type="number" placeholder='Enter Value' onChange={(e) => setVal(e.target.value)}  />

                <Form.Label className='mt-2 h3' size="lg">To:</Form.Label>
                <Form.Select size="lg" onChange={(e) => setOutputUnit(e.target.value)}>
                    <option>Select unit to convert</option>
                    <option value="KGS">KGS</option>
                    <option value="GMS">Grams</option>
                    <option value="MGS">Miligrams</option>
                    <option value="POUND">Pound</option>
                    <option value="TONNE">Tonne</option>
                </Form.Select>
                <Form.Label className='mt-2 h5 text-light' defaultValue={result} size="lg">Result</Form.Label>

                <Form.Control type="number" defaultValue={result} placeholder='Result' />
                <div className='d-grid gap-2 mt-3'>
                    <Button className='button' style={{borderRadius:"10px"}} size='lg' onClick={handleClick}>Convert</Button>
                </div>
            </Container>
        </div>
    )
}

export default Home